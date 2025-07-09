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
                    imageUrl: true
                }
            }
        }
    })
    return (
        <div className="min-h-screen bg-background py-16 md:py-16">
            <Navbar />
            {articles.map((article) => (
                <div>
                    <ArticleDetail key={article.id} article={article} />
                </div>
            ))}
        </div>
    )
}