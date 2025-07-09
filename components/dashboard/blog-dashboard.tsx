import Link from "next/link";
import { Button } from "../ui/button";
import {
  PlusCircle,
  FileText,
  BarChart3,
  Users,
} from "lucide-react";
import { currentUser } from "@clerk/nextjs/server";
import prisma from "@/lib/prisma";

export const BlogDashboard = async() => {
  const user=await currentUser();
  const authUser=await prisma.user.findUnique({
    where:{
      clerkUserId:user?.id
    }
  })
  const articles=await prisma.articles.findMany({
    where:{
      authorId:authUser?.id
    }
  })
  return (
    <div className="flex-1 p-4 md:p-8 min-h-[calc(100vh-64px)]">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-12 gap-6">
          <div className="space-y-3">
            <h1 className="font-bold text-4xl md:text-5xl text-white tracking-tight">
              Blog Dashboard
            </h1>
            <p className="text-gray-300 text-lg">
              Manage your content and track your performance
            </p>
          </div>
          <Link href="/dashboard/articles/create">
            <Button className="flex items-center gap-2 px-6 py-4 bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 text-base font-medium">
              <PlusCircle className="w-5 h-5" />
              New Article
            </Button>
          </Link>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-6 hover:bg-white/10 transition-all duration-300 group">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-300">
                  Total Articles
                </p>
                <p className="text-3xl font-bold text-white mt-2">{articles.length}</p>
              </div>
              <div className="p-3 rounded-lg bg-blue-500/10 group-hover:bg-blue-500/20 transition-colors">
                <FileText className="w-6 h-6 text-blue-400" />
              </div>
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-6 hover:bg-white/10 transition-all duration-300 group">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-300">Total Views</p>
                <p className="text-3xl font-bold text-white mt-2">12.5K</p>
              </div>
              <div className="p-3 rounded-lg bg-green-500/10 group-hover:bg-green-500/20 transition-colors">
                <BarChart3 className="w-6 h-6 text-green-400" />
              </div>
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-6 hover:bg-white/10 transition-all duration-300 group">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-300">Subscribers</p>
                <p className="text-3xl font-bold text-white mt-2">1.2K</p>
              </div>
              <div className="p-3 rounded-lg bg-purple-500/10 group-hover:bg-purple-500/20 transition-colors">
                <Users className="w-6 h-6 text-purple-400" />
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-8">
          <h2 className="text-2xl font-semibold text-white mb-6">
            Quick Actions
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link href="/dashboard/articles" className="block group">
              <div className="h-full p-6 bg-gradient-to-br from-blue-500/5 to-blue-600/10 rounded-xl border border-white/5 hover:border-blue-400/30 hover:from-blue-500/10 hover:to-blue-600/20 transition-all duration-300 cursor-pointer">
                <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center mb-4 group-hover:bg-blue-500/20 transition-colors">
                  <FileText className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="font-medium text-white text-lg mb-1">View All Articles</h3>
                <p className="text-sm text-gray-300">
                  Manage your published content
                </p>
              </div>
            </Link>

            <Link href="/dashboard/analytics" className="block group">
              <div className="h-full p-6 bg-gradient-to-br from-green-500/5 to-green-600/10 rounded-xl border border-white/5 hover:border-green-400/30 hover:from-green-500/10 hover:to-green-600/20 transition-all duration-300 cursor-pointer">
                <div className="w-12 h-12 rounded-lg bg-green-500/10 flex items-center justify-center mb-4 group-hover:bg-green-500/20 transition-colors">
                  <BarChart3 className="w-6 h-6 text-green-400" />
                </div>
                <h3 className="font-medium text-white text-lg mb-1">View Analytics</h3>
                <p className="text-sm text-gray-300">
                  Track performance metrics
                </p>
              </div>
            </Link>

            <Link href="/dashboard/settings" className="block group">
              <div className="h-full p-6 bg-gradient-to-br from-purple-500/5 to-purple-600/10 rounded-xl border border-white/5 hover:border-purple-400/30 hover:from-purple-500/10 hover:to-purple-600/20 transition-all duration-300 cursor-pointer">
                <div className="w-12 h-12 rounded-lg bg-purple-500/10 flex items-center justify-center mb-4 group-hover:bg-purple-500/20 transition-colors">
                  <Users className="w-6 h-6 text-purple-400" />
                </div>
                <h3 className="font-medium text-white text-lg mb-1">Settings</h3>
                <p className="text-sm text-gray-300">
                  Configure your dashboard
                </p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
