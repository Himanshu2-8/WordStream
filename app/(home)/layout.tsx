import { currentUser } from "@clerk/nextjs/server"
import prisma from "@/lib/prisma";

const layout = async ({children}:{children:React.ReactNode}) => {
    const user = await currentUser()
    
    if (user) {
        const loggedInUser = await prisma.user.findUnique({
            where: {
                clerkUserId: user.id
            }
        })
        
        if (!loggedInUser && user.emailAddresses[0]?.emailAddress) {
            await prisma.user.upsert({
                where: { clerkUserId: user.id },
                update: {},
                create: {
                    clerkUserId: user.id,
                    name: user.fullName || "",
                    email: user.emailAddresses[0].emailAddress,
                    imageUrl: user.imageUrl
                }
            })
        }
    }

    return (
        <div>
            {children}
        </div>
    )
}

export default layout