# WordStream

WordStream is a modern, full-stack blog and content publishing platform built with Next.js. It provides a robust system for creating, managing, and displaying articles, complete with user authentication, rich text editing, comments, and likes.

## Features

- **User Authentication:** Secure user management powered by Clerk.
- **Article Management:** Create, edit, and publish articles with rich text content.
- **Rich Text Editor:** Integrated Tiptap editor for a seamless writing experience.
- **Image Uploads:** Cloudinary integration for efficient image hosting and delivery.
- **Theming:** Light and dark mode support.
- **Responsive Design:** Built with Tailwind CSS for a mobile-first approach.

## Technologies Used

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS, Radix UI
- **Database:** PostgreSQL
- **ORM:** Prisma
- **Authentication:** Clerk
- **Image Hosting:** Cloudinary
- **Rich Text Editor:** Tiptap
- **Validation:** Zod

## Getting Started

Follow these steps to set up and run WordStream locally.

### Prerequisites

Make sure you have the following installed:

- Node.js (LTS recommended)
- npm, yarn, pnpm, or bun
- PostgreSQL database

### Installation

1.  Clone the repository:

    ```bash
    git clone <repository-url>
    cd WordStream
    ```

2.  Install dependencies:

    ```bash
    npm install
    # or
    yarn install
    # or
    pnpm install
    # or
    bun install
    ```

### Environment Variables

Create a `.env` file in the root of the project and add the following environment variables:

```env
DATABASE_URL="postgresql://USER:PASSWORD@HOST:PORT/DATABASE?schema=public"

NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY="your_clerk_publishable_key"
CLERK_SECRET_KEY="your_clerk_secret_key"

NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/

NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME="your_cloudinary_cloud_name"
CLOUDINARY_API_KEY="your_cloudinary_api_key"
CLOUDINARY_API_SECRET="your_cloudinary_api_secret"
```

Replace the placeholder values with your actual credentials.

### Database Setup

Run Prisma migrations to set up your database schema:

```bash
npx prisma migrate dev --name init
```

### Running the Development Server

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deployment

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

