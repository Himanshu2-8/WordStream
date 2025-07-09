"use client";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Button } from "../ui/button";
import { startTransition, useActionState } from "react";
import { createArticle } from "@/actions/create-article";
import { Loader2 } from "lucide-react";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

export const CreateArticles = () => {
  const [formState, action, isPending] = useActionState(createArticle, {
    errors: {},
  });

  const editor = useEditor({
    extensions: [StarterKit],
    content: "",
    editorProps: {
      attributes: {
        class:
          "prose dark:prose-invert max-w-none focus:outline-none min-h-[300px] p-4",
      },
    },
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    formData.append("content", editor?.getHTML() || "");
    startTransition(() => action(formData));
  };

  return (
    <div className="max-w-4xl mx-auto py-8 px-4 sm:px-6">
      <div className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">
            Create a New Article
          </h1>
          <p className="text-gray-300">
            Write and publish your next great article
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label
              htmlFor="title"
              className="text-sm font-medium text-gray-300"
            >
              Article Title
            </Label>
            <Input
              id="title"
              placeholder="Enter article title"
              type="text"
              name="title"
              className="w-full p-4 bg-white/5 border-white/10 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900 focus:bg-white/10 transition-all"
            />
            {formState.errors.title && (
              <span className="text-red-400 text-sm">
                {formState.errors.title}
              </span>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label
                htmlFor="category"
                className="text-sm font-medium text-gray-300"
              >
                Category
              </Label>
              <select
                name="category"
                id="category"
                className="w-full p-4 bg-white/5 border border-white/10 rounded-lg text-white focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900 focus:bg-white/10 transition-all"
              >
                <option value="" className="bg-gray-900">
                  Select Category
                </option>
                <option value="technology" className="bg-gray-900">
                  Technology
                </option>
                <option value="life" className="bg-gray-900">
                  Life
                </option>
                <option value="stories" className="bg-gray-900">
                  Stories
                </option>
              </select>
              {formState.errors.category && (
                <span className="text-red-400 text-sm">
                  {formState.errors.category}
                </span>
              )}
            </div>

            <div className="space-y-2">
              <Label className="block text-sm font-medium text-gray-300">
                Featured Image
              </Label>
              <div className="flex items-center justify-center w-full">
                <label className="flex flex-col w-full h-32 border-2 border-dashed hover:border-blue-500 hover:bg-white/5 border-white/10 rounded-lg cursor-pointer transition-colors">
                  <div className="flex flex-col items-center justify-center pt-7">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-8 h-8 text-gray-400 group-hover:text-gray-300"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                      />
                    </svg>
                    <p className="pt-1 text-sm tracking-wider text-gray-400 group-hover:text-gray-300">
                      Upload an image
                    </p>
                  </div>
                  <Input
                    type="file"
                    id="featuredImage"
                    name="featuredImage"
                    accept="image/*"
                    className="hidden"
                  />
                </label>
              </div>
              {formState.errors.featuredImage && (
                <span className="text-red-400 text-sm">
                  {formState.errors.featuredImage[0]}
                </span>
              )}
            </div>
          </div>

          <div className="space-y-2">
            <Label className="text-sm font-medium text-gray-300">Content</Label>
            <div className="border border-white/10 rounded-lg overflow-hidden focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-900 transition-all">
              <EditorContent editor={editor} className="min-h-[300px]" />
            </div>
            {formState.errors.content && (
              <span className="text-red-400 text-sm">
                {formState.errors.content[0]}
              </span>
            )}
          </div>

          <div className="flex justify-end gap-4 pt-4 border-t border-white/10">
            <Button
              type="button"
              variant="outline"
              className="bg-transparent border-white/10 text-white hover:bg-white/10 hover:text-white"
            >
              Save Draft
            </Button>
            <Button
              type="submit"
              disabled={isPending}
              className="bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white font-medium px-6 py-3 rounded-lg transition-all duration-300"
            >
              {isPending ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Publishing...
                </>
              ) : (
                "Publish Article"
              )}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};
