import prisma from "@/lib/prisma";
import { Navbar } from "@/components/home/navbar";
import ArticleDetail from "@/components/articles/article-detail";

export default async function Articles() {
  const articles = await prisma.articles.findMany({
    include: {
      author: {
        select: {
          name: true,
          email: true,
          imageUrl: true,
        },
      },
    },
  });
  return (
    <div className="bg-background">
      <div>
        <Navbar />
      </div>
      {articles.map((article) => (
        <div key={article.id}>
          <ArticleDetail key={article.id} article={article} />
        </div>
      ))}
    </div>
  );
}
