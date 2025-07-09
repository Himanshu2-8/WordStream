import ArticleDetail from "@/components/articles/article-detail";
import prisma from "@/lib/prisma";
import {currentUser} from "@clerk/nextjs/server";
import {redirect} from "next/navigation";

export default async function UserArticles(){
    const user=await currentUser();
    if(!user){
      alert("You are not signed in!")
      redirect("/");
    }
    const authUser=await prisma.user.findUnique({
      where:{
        clerkUserId:user.id
      }
    })
    const articles=await prisma.articles.findMany({
      where:{
        authorId:authUser?.id
      },
      include: {
        author: {
            select: {
              name: true,
              email: true,
              imageUrl: true
            }
        }
      }
    })
    return <div className="min-h-screen p-8">
      {articles.map((article) => (
        <ArticleDetail key={article.id} article={article} />
      ))}
    </div>
}