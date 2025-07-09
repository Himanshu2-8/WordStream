import {BlogDashboard} from "@/components/dashboard/blog-dashboard";
import { Navbar } from "@/components/home/navbar";

export default function Dashboard() {
    return (
        <div className="min-h-screen bg-background">
          <Navbar/>
          <BlogDashboard/>
        </div>
    )
}