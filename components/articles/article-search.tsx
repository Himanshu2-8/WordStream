import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';
import { searchAction } from '@/actions/search';
import { useSearchParams } from 'next/navigation';

const ArticleSearch = () => {
    const searchParams = useSearchParams();
    const handleSearch = async (e: React.FormEvent) => {
        e.preventDefault();
        await searchAction(searchParams.get("search") || "")
    }
    return (
        <form onSubmit={handleSearch}>
            <div className="w-full max-w-2xl mx-auto">
                <div className="relative">
                    <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                    <Input
                        type="text"
                        placeholder="Search articles..."
                        className={cn(
                            "pl-10 pr-4 py-6 text-base",
                            "border border-border bg-card/50 backdrop-blur-sm",
                            "focus-visible:ring-2 focus-visible:ring-primary/50",
                            "transition-all duration-200 rounded-lg"
                        )}
                    />
                </div>
            </div>
        </form>
    );
};

export default ArticleSearch;