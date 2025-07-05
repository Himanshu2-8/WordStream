import AllArticles from "@/components/articles/all-articles";
import { Button } from "@/components/ui/button";
import { Ghost } from "lucide-react";

export default function Articles() {
    return (
        <div className="min-h-screen bg-background">
            <div className="container mx-auto px-4 py-12 sm:px-6 lg:text-5xl">
                <div className="mb-12 space-y-4 text-center">
                    <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl leading-tight">All Articles</h1>
                </div>

                <div>
                    <AllArticles />
                </div>

                <div className="mt-12 flex justify-center gap-2">
                    <Button variant={'ghost'}> ← Previous</Button>
                    <Button variant={'ghost'}>1</Button>
                    <Button variant={'ghost'}>2</Button>
                    <Button variant={'ghost'}>3</Button>
                    <Button variant={'ghost'}>Next → </Button>
                </div>
            </div>
        </div>
    )
}