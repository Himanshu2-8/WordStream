import Link from "next/link";
import Image from "next/image";
import { Card } from "../ui/card";
import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import prisma from "@/lib/prisma";

const TopArticles = async () => {
  const articles = await prisma.articles.findMany({
    orderBy: {
      createdAt: "desc"
    },
    include: {
      author: {
        select: {
          name: true,
          imageUrl: true
        }
      }
    }
  })
  return (
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 my-3">
      {
        articles.slice(0, 3).map((article) => (
          <Card
            key={article.id}
            className={cn(
              "group relative overflow-hidden transition-all hover:scale-[1.02]",
              "border-gray-200/50 dark:border-white/10",
              "bg-white/50 dark:bg-gray-900/50 backdrop-blur-lg",
            )}
          >
            <div className="p-6">
              <Link href={`/articles/${article.id}`} className="block mb-4">
                <div className="relative mb-4 h-48 w-full overflow-hidden rounded-xl">
                  <Image
                    src={article.featuredImage}
                    alt="Article"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex items-center gap-3 tex-sm text-gray-500">
                  <Avatar>
                    <AvatarImage src={article.author.imageUrl || ""} />
                    <AvatarFallback>JS</AvatarFallback>
                  </Avatar>
                  <span>{article.author.name}</span>
                </div>
              </Link>
              <h3 className="font-semibold text-2xl">
                {article.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {article.content.length > 100 ? article.content.substring(0, 100) + "..." : article.content}
              </p>
            </div>
          </Card>
        ))
      }

    </div>
  );
};

export default TopArticles;
