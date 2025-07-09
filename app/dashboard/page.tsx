import { BlogDashboard } from "@/components/dashboard/blog-dashboard";
import { Navbar } from "@/components/home/navbar";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
      <main className="relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent" />
        <BlogDashboard />
      </main>
    </div>
  );
}
