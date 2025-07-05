import Image from "next/image";
import { Card } from "../ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@radix-ui/react-avatar";

const AllArticles = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="group relative overflow-hidden transition-all hover:shadow-lg">
                <div className="p-6">
                    <div className="relative mb-4 h-48 w-full overflow-hidden rounded-xl">
                        <Image src={"https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c3R1ZHl8ZW58MHx8MHx8fDA%3D"}
                            alt="blog-image"
                            fill
                            className="object-cover"
                        />
                    </div>

                    <h3 className="font-semibold text-2xl">Title</h3>
                    <p className="text-sm text-gray-500 mt-2">Category</p>
                    <div className="flex items-center justify-between mt-4">
                        <div className="flex items-center gap-2">
                            <Avatar>
                                <AvatarImage src="" />
                                <AvatarFallback>JS</AvatarFallback>
                            </Avatar>
                            <span>Himanshu Pragyan</span>
                        </div>
                        <div className="text-sm text-gray-500">July 4, 2025</div>
                    </div>
                </div>
            </Card>
        </div>
    )
}

export default AllArticles;