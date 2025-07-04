import Link from "next/link";
import { Card } from "../ui/card";
import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

const TopArticles = () => {
  return (
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 my-3">
      <Card
        className={cn(
          "group relative overflow-hidden transition-all hover:scale-[1.02]",
          "border-gray-200/50 dark:border-white/10",
          "bg-white/50 dark:bg-gray-900/50 backdrop-blur-lg",
        )}
      >
        <div className="p-6">
          <Link href={`/articles/id`} className="block mb-4">
            <div className="relative mb-4 h-48 w-full overflow-hidden rounded-xl">
              <img
                src="https://images.unsplash.com/photo-1612367980327-7454a7276aa7?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bm90ZWJvb2t8ZW58MHx8MHx8fDA%3D"
                alt="Article"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="flex items-center gap-3 tex-sm text-gray-500">
              <Avatar>
                <AvatarImage src="https://images.unsplash.com/photo-1612367980327-7454a7276aa7?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bm90ZWJvb2t8ZW58MHx8MHx8fDA%3D" />
                <AvatarFallback>JS</AvatarFallback>
              </Avatar>
              <span>Himanshu</span>
            </div>
          </Link>
          <h3 className="font-semibold text-2xl">
            Why writing while studying works
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Writing while studying can help you better understand the material
            and improve your retention....
          </p>
        </div>
      </Card>
    </div>
  );
};

export default TopArticles;
