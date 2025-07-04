import { BlogFooter } from "@/components/home/blog-footer";
import { Hero } from "@/components/home/hero";
import { Navbar } from "@/components/home/navbar";
import TopArticles from "@/components/home/top-articles";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <section className="relative py-16 md:py-16">
        <div className="container relative mx-auto px-4">
          <div className="mb-4 text-center">
            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl leading-tight">
              Featured Articles
            </h2>
            <p className="mt-4 text-lg text-gray-300 font-medium max-w-2xl mx-auto">Discover our most popular content</p>
          </div>
        </div>
        <TopArticles />
        <div className="mt-12 text-center">
          <Link 
            href="/articles" 
            className="inline-block transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 rounded-lg"
          >
            <Button 
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white font-semibold py-6 px-8 text-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              View All Articles
            </Button>
          </Link>
        </div>
      </section>
      <BlogFooter/>
    </div>
  );
}
