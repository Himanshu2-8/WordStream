"use client"
import Link from "next/link"
import { Button } from "../ui/button"
import { SearchInput } from "./search-input"
import { useState } from "react"
import { Menu, X, Search } from "lucide-react"
import { ToggleMode } from "@/components/home/toggle-mode"
import { SignedIn, UserButton, SignedOut, SignInButton, SignUpButton } from "@clerk/nextjs"

export const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false)
  return (
    <div className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 px-4">
      <div className="w-full">
        <div className="flex h-12 items-center justify-between">
          <Link href="/" className="text-foreground hover:text-foreground/80 transition-colors">
            <span className="font-bold text-2xl">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-300 bg-clip-text text-transparent">Word</span>
              <span className="text-foreground">Stream</span>
            </span>
          </Link>
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/articles"
              className="relative text-sm font-medium text-foreground/80 hover:text-foreground transition-colors after:absolute after:bottom-[-6px] after:left-0 after:w-0 after:h-0.5 after:bg-gradient-to-r after:from-purple-600 after:to-indigo-600 after:transition-all after:duration-300 hover:after:w-full"
            >
              Articles
            </Link>
            <Link
              href="/tutorial"
              className="relative text-sm font-medium text-foreground/80 hover:text-foreground transition-colors after:absolute after:bottom-[-6px] after:left-0 after:w-0 after:h-0.5 after:bg-gradient-to-r after:from-purple-600 after:to-indigo-600 after:transition-all after:duration-300 hover:after:w-full"
            >
              Tutorial
            </Link>
            <Link
              href="/about"
              className="relative text-sm font-medium text-foreground/80 hover:text-foreground transition-colors after:absolute after:bottom-[-6px] after:left-0 after:w-0 after:h-0.5 after:bg-gradient-to-r after:from-purple-600 after:to-indigo-600 after:transition-all after:duration-300 hover:after:w-full"
            >
              About
            </Link>
            <Link
              href="/dashboard"
              className="relative text-sm font-medium text-foreground/80 hover:text-foreground transition-colors after:absolute after:bottom-[-6px] after:left-0 after:w-0 after:h-0.5 after:bg-gradient-to-r after:from-purple-600 after:to-indigo-600 after:transition-all after:duration-300 hover:after:w-full"
            >
              Dashboard
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <SearchInput />
            <ToggleMode />
            <div className="flex items-center gap-3">
              <SignedIn>
                <div className="flex items-center gap-4">
                  <Link 
                    href="/dashboard" 
                    className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
                  >
                    Dashboard
                  </Link>
                  <UserButton afterSignOutUrl="/" />
                </div>
              </SignedIn>
              <SignedOut>
                <div className="hidden md:flex items-center gap-3">
                  <SignInButton mode="modal">
                    <Button variant="ghost" className="text-foreground/80 hover:text-foreground hover:bg-foreground/5">
                      Sign In
                    </Button>
                  </SignInButton>
                  <SignUpButton mode="modal">
                    <Button className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white">
                      Get Started
                    </Button>
                  </SignUpButton>
                </div>
              </SignedOut>
            </div>
          </div>
          <div>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobile(!isMobile)}
              className=" md:hidden text-foreground/80 hover:text-foreground hover:bg-foreground/5"
            >
              {isMobile ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>
      <div>
        {isMobile && (
          <div className=" md: hiddenpy-4 space-y-4 border-t">
            {/* Mobile Navigation Links */}
            <div className="space-y-2 px-4">
              <Link
                href="/articles"
                className="block px-3 py-2 text-base font-medium text-foreground"
                onClick={() => setIsMobile(false)}
              >
                Articles
              </Link>
              <Link
                href="/tutorials"
                className="block px-3 py-2 text-base font-medium text-foreground"
                onClick={() => setIsMobile(false)}
              >
                Tutorials
              </Link>
              <Link
                href="/about"
                className="block px-3 py-2 text-base font-medium text-foreground"
                onClick={() => setIsMobile(false)}
              >
                About
              </Link>
              <Link
                href="/dashboard"
                className="block px-3 py-2 text-base font-medium text-foreground"
                onClick={() => setIsMobile(false)}
              >
                Dashboard
              </Link>
            </div>
            <SignedOut>
              <div className="px-4 flex flex-col gap-2 pt-2">
                <SignInButton mode="modal">
                  <Button variant="outline" className="w-full">
                    Sign In
                  </Button>
                </SignInButton>
                <SignUpButton mode="modal">
                  <Button className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white">
                    Create Account
                  </Button>
                </SignUpButton>
              </div>
            </SignedOut>
          </div>
        )}
      </div>
    </div>
  )
}