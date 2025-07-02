import Link from "next/link"
import { Button } from "../ui/button"
import { SearchInput } from "./search-input"
import { ToggleMode } from "./toggle-mode"

export const Navbar = () => {
    return <div className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 px-4">
        <div className="w-full">
            <div className="flex h-12 items-center justify-between">
                <Link href="/" className="text-foreground hover:text-foreground/80 transition-colors">
                    <span className="font-bold text-2xl">
                        <span className="bg-gradient-to-r from-purple-600 to bg-indigo-600 dark:from-purple-400 dark:to-indigo-400 bg-clip-text text-transparent">Word</span>
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
                    <div className="hidden md:flex items-center gap-3">
                        <Button variant="ghost" className="text-foreground/80 hover:text-foreground hover:bg-foreground/5">
                            Login
                        </Button>
                        <Button className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white">
                            Sign Up
                        </Button>
                    </div>
                </div>

            </div>
        </div>
    </div>
}