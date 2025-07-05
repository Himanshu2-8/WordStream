import Link from "next/link";
import { Button } from "../ui/button";
import {
  PlusCircle,
  FileText,
  BarChart3,
  Users,
  TrendingUp,
} from "lucide-react";

export const BlogDashboard = () => {
  return (
    <div className="flex-1 p-4 md:p-8 bg-gradient-to-br from-slate-50 to-blue-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
          <div className="space-y-2">
            <h1 className="font-bold text-3xl md:text-4xl text-gray-900 tracking-tight">
              Blog Dashboard
            </h1>
            <p className="text-gray-600 text-lg">
              Manage your content and track your performance
            </p>
          </div>
          <Link href="/dashboard/articles/create">
            <Button className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-200">
              <PlusCircle className="w-5 h-5" />
              New Article
            </Button>
          </Link>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <div className="rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow duration-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">
                  Total Articles
                </p>
                <p className="text-2xl font-bold text-gray-900 mt-1">24</p>
              </div>
              <div className=" p-3 rounded-full">
                <FileText className="w-6 h-6 text-blue-600" />
              </div>
            </div>
          </div>

          <div className="rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow duration-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Views</p>
                <p className="text-2xl font-bold text-gray-900 mt-1">12.5K</p>
              </div>
              <div className="p-3 rounded-full">
                <BarChart3 className="w-6 h-6 text-green-600" />
              </div>
            </div>
          </div>

          <div className="rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow duration-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Subscribers</p>
                <p className="text-2xl font-bold text-gray-900 mt-1">1.2K</p>
              </div>
              <div className="bp-3 rounded-full">
                <Users className="w-6 h-6 text-purple-600" />
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="rounded-xl shadow-sm border border-gray-200 p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            Quick Actions
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <Link href="/dashboard/articles" className="block">
              <div className="p-4 border-2 border-gray-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-colors duration-200 cursor-pointer">
                <FileText className="w-8 h-8 text-blue-600 mb-2" />
                <h3 className="font-medium text-gray-900">View All Articles</h3>
                <p className="text-sm text-gray-600">
                  Manage your published content
                </p>
              </div>
            </Link>

            <Link href="/dashboard/analytics" className="block">
              <div className="p-4 border-2 border-gray-200 rounded-lg hover:border-green-300 hover:bg-green-50 transition-colors duration-200 cursor-pointer">
                <BarChart3 className="w-8 h-8 text-green-600 mb-2" />
                <h3 className="font-medium text-gray-900">View Analytics</h3>
                <p className="text-sm text-gray-600">
                  Track performance metrics
                </p>
              </div>
            </Link>

            <Link href="/dashboard/settings" className="block">
              <div className="p-4 border-2 border-gray-200 rounded-lg hover:border-purple-300 hover:bg-purple-50 transition-colors duration-200 cursor-pointer">
                <Users className="w-8 h-8 text-purple-600 mb-2" />
                <h3 className="font-medium text-gray-900">Settings</h3>
                <p className="text-sm text-gray-600">
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
