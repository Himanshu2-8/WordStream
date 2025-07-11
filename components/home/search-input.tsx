import { Search } from "lucide-react"
import { Input } from "../ui/input"
import { useSearchParams } from "next/navigation"

export const SearchInput = () => {
    const params = useSearchParams();
    return (
        <form>
            <div className="relative">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                    type="search"
                    name="search"
                    defaultValue={params.get("search") || ""}
                    placeholder="Search..."
                    className="w-full pl-9 pr-4 py-2 rounded-md bg-background"
                />
            </div>
        </form>
    )
}