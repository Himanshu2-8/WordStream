import prisma from "@/lib/prisma"
import ArticleDetail from "@/components/articles/article-detail"

type ArticlePageProps = {
  params: { id: string }
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const article = await prisma.articles.findUnique({
    where: {
      id: params.id
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

  if (!article) {
    return <h1>Article not found</h1>
  }

  return (
    <div className="min-h-screen bg-background py-16 md:py-16">
      <ArticleDetail article={article} />
    </div>
  )
}