import { CreateArticles } from "@/components/articles/create-articles"

export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
      <main className="relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent" />
        <div className="relative z-10">
          <CreateArticles />
        </div>
      </main>
    </div>
  );
}