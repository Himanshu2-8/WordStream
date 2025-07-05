"use client"
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card"
import { Input } from "../ui/input"
import { Label } from "../ui/label"
import { Button } from "../ui/button"
import { startTransition, useActionState, useState, useCallback } from "react"
import { createArticle } from "@/actions/create-article"
import { Loader2 } from "lucide-react"
import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'

export const CreateArticles = () => {
  const [formState, action, isPending] = useActionState(createArticle, { errors: {} })
  
  const editor = useEditor({
    extensions: [
      StarterKit,
    ],
    content: '',
    editorProps: {
      attributes: {
        class: 'prose dark:prose-invert max-w-none focus:outline-none min-h-[300px] p-4',
      },
    }
  })

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    formData.append('content', editor?.getHTML() || '');
    startTransition(() => action(formData));
  }
    

  return (
    <div className="max-w-4xl mx-auto p-4 sm:p-6">
      <Card className="shadow-lg">
        <CardHeader className="border-b">
          <CardTitle className="text-2xl font-bold text-white">Create a New Article</CardTitle>
        </CardHeader>
        <CardContent className="pt-6">
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="space-y-2 mb-6">
              <Label htmlFor="title" className="text-sm font-medium">Article Title</Label>
              <Input
                id="title"
                placeholder="Enter article title"
                type="text"
                name="title"
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              />
              {formState.errors.title && <span className="text-red-500">{formState.errors.title}</span>}
            </div>

            <div className="space-y-2 mb-6">
              <Label htmlFor="category" className="text-sm font-medium">Category</Label>
              <select
                name="category"
                id="category"
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              >
                <option value="">Select Category</option>
                <option value="technology">Technology</option>
                <option value="life">Life</option>
                <option value="stories">Stories</option>
              </select>
              {formState.errors.category && <span className="text-red-500">{formState.errors.category}</span>}
            </div>

            <div>
              <Label className="mb-2">Feature an Image</Label>
              <Input type="file" id="featuredImage" name="featuredImage" accept="image/*" />
              {formState.errors.featuredImage && <span className="text-red-500">{formState.errors.featuredImage[0]}</span>}
            </div>
            <div className="space-y-2">
              <Label>Content</Label>
            </div>
            <div className="border rounded-sm mb-2 mt-2 w-full focus-within:ring-2 focus-within:ring-primary/50 focus-within:border-transparent overflow-hidden">
              <EditorContent editor={editor} />
            </div>
            {formState.errors.content && <span className="text-red-500">{formState.errors.content[0]}</span>}
            <div className="flex justify-end gap-4">
              <Button variant={'outline'}>Cancel</Button>
              <Button type="submit" disabled={isPending}>
                {isPending ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : "Publish Article"}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}