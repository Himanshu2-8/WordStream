"use server"
import { auth } from "@clerk/nextjs/server"
import { redirect } from "next/navigation"
import { z } from "zod"
import { v2 as cloudinary, UploadApiResponse } from "cloudinary"
import prisma from "@/lib/prisma"

if (!process.env.CLOUDINARY_CLOUD_NAME || !process.env.CLOUDINARY_API_KEY || !process.env.CLOUDINARY_API_SECRET) {
  throw new Error('Missing Cloudinary configuration')
}

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
})


const articleSchema = z.object({
  title: z.string().min(3, { message: 'Title must be at least 3 characters' }).max(100, { message: 'Title must be less than 100 characters' }),
  category: z.string().min(3, { message: 'Category must be at least 3 characters' }).max(30, { message: 'Category must be less than 30 characters' }),
  content: z.string().min(10, { message: 'Content must be at least 10 characters' }),
  featuredImage: z.any().refine(file => file && file.size > 0, 'Featured image is required')
})

type ArticleFormState = {
  errors: {
    title?: string[]
    category?: string[]
    featuredImage?: string[]
    content?: string[]
    formErrors?: string[]
  }
}

export const createArticle = async (prevState: ArticleFormState, formData: FormData): Promise<ArticleFormState> => {
  const imageFile = formData.get('featuredImage') as File | null;
  
  const validate = articleSchema.safeParse({
    title: formData.get('title'),
    category: formData.get('category'),
    content: formData.get('content'),
    featuredImage: imageFile
  });
  if (!validate.success) {
    return {
      errors: validate.error.flatten().fieldErrors
    }
  }
  const { userId } = await auth();
  if (!userId) {
    return {
      errors: {
        formErrors: ["You must be logged in to create an article"]
      }
    }
  }

  if (!imageFile || imageFile.size === 0) {
    return {
      errors: {
        featuredImage: ['Featured image is required'],
      },
    };
  }

  const imageBuffer = await imageFile.arrayBuffer();
  const buffer = Buffer.from(imageBuffer)

  const uploadResponse: UploadApiResponse | undefined = await new Promise((resolve, reject) => {
    const uploadStream = cloudinary.uploader.upload_stream(
      {
        resource_type: "auto",
      },
      (error, result) => {
        if (error) {
          reject(error)
        }
        resolve(result)
      }
    )
    uploadStream.end(buffer)
  });

  const imageURL = uploadResponse?.secure_url;
  if (!imageURL) {
    return {
      errors: {
        featuredImage: ["Image upload failed"]
      }
    }
  }

  const existingUser = await prisma.user.findUnique({
    where: {
      clerkUserId: userId
    }
  })

  if(!existingUser){
    return {
      errors: {
        formErrors: ["User not found"]
      }
    }
  }

  try {
    await prisma.articles.create({
      data: {
        title: validate.data.title,
        catagory: validate.data.category,
        content: validate.data.content,
        featuredImage: imageURL,
        authorId: existingUser.id
      }
    });
  } catch (error:unknown) {
    if(error instanceof Error){
      return{
        errors:{
          formErrors:[error.message]
        }
      }
    }else{
      return{
        errors:{
          formErrors:["Something went wrong"]
      }
      }
    }
  }

  redirect("/dashboard")
}