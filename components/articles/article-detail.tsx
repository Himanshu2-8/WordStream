import { Prisma } from "@/app/generated/prisma"
import Image from "next/image"
import { Avatar, AvatarImage, AvatarFallback } from "@radix-ui/react-avatar"

type ArticleDetailProps = {
    article: Prisma.ArticlesGetPayload<{
        include: {
            author: {
                select: {
                    name: true,
                    email: true,
                    imageUrl: true
                }
            };
        };
    }>
}

export default function ArticleDetail({ article }: ArticleDetailProps) {
    return (
        <div className="min-h-screen bg-background">
            <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
                <article className="mx-auto max-w-3xl bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 sm:p-10 lg:p-12">
                    {/* Category */}
                    <div className="mb-6 text-left">
                        <span className="inline-block bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                            {article.catagory}
                        </span>
                    </div>
                    
                    {/* Title */}
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-10 leading-tight text-left">
                        {article.title}
                    </h1>
                    
                    {/* Author and Date */}
                    <div className="flex items-center gap-2 mb-10 pb-8 border-b border-gray-800 text-left">
                        <div className="flex-shrink-0">
                            <div className="h-6 w-6 rounded-full overflow-hidden">
                                <Avatar className="h-full w-full">
                                    <AvatarImage 
                                        src={article.author.imageUrl || ""} 
                                        className="object-cover h-full w-full"
                                    />
                                    <AvatarFallback className="bg-gray-200 text-gray-700 text-xs flex items-center justify-center h-full w-full">
                                        {article.author.name[0].toUpperCase()}
                                    </AvatarFallback>
                                </Avatar>
                            </div>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-300 w-full">
                            <span className="font-medium text-white">{article.author.name}</span>
                            <span>•</span>
                            <time dateTime={article.createdAt.toISOString()}>
                                {new Date(article.createdAt).toLocaleDateString('en-US', {
                                    year: 'numeric',
                                    month: 'short',
                                    day: 'numeric'
                                })}
                            </time>
                        </div>
                    </div>
                    
                    {/* Article Content */}
                    <div className="prose prose-invert max-w-none pt-8 text-left prose-p:leading-relaxed prose-p:mb-6">
                        {article.content && (
                            <div dangerouslySetInnerHTML={{ __html: article.content }} />
                        )}
                    </div>
                </article>
            </div>
        </div>
    )
}