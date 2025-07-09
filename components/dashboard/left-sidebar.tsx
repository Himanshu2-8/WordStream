"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  BarChart,
  FileIcon,
  LayoutDashboard,
  MessageCircle,
  Settings,
} from "lucide-react";
import { useState } from "react";

export const LeftSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <Button variant={"outline"} className="md:hidden">
            <LayoutDashboard className="h-5 w-5" />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-[250px]">
          <DashboardSidebar />
        </SheetContent>
      </Sheet>

      <div className="hidden md:block h-screen w-[250px] border-r bg-background">
        <DashboardSidebar />
      </div>
    </div>
  );
};

const DashboardSidebar = () => {
  return (
    <div className="h-full px-4 py-6">
      <div className="flex items-center gap-2 mb-8 px-2">
        <nav className="space-y-2">
          <Link href={"/dashboard"}>
            <Button className="w-full justify-start gap-2" variant="ghost">
              <LayoutDashboard className="w-5 h-5" />
              Overview
            </Button>
          </Link>
          <Link href={"/dashboard/articles"}>
            <Button className="w-full justify-start gap-2" variant="ghost">
              <FileIcon className="w-5 h-5" />
              Articles
            </Button>
          </Link>
          <Link href={"/dashboard"}>
            <Button className="w-full justify-start gap-2" variant="ghost">
              <Settings className="w-5 h-5" />
              Settings
            </Button>
          </Link>
          <Link href={"/dashboard"}>
            <Button className="w-full justify-start gap-2" variant="ghost">
              <BarChart className="w-5 h-5" />
              Analysis
            </Button>
          </Link>
        </nav>
      </div>
    </div>
  );
};
