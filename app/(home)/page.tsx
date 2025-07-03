import { Hero } from "@/components/home/hero";
import { Navbar } from "@/components/home/navbar";
import TopArticles from "@/components/home/top-articles";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <TopArticles/>
    </div>
  );
}
