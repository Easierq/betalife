"use client";

import AuthorAttribution from "@/components/author";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const post = {
  id: 1,
  title: "Exploring the World's Natural Wonders: A Nature Lover's Journey",
  description:
    "This project is a full-stack clone of the popular language learning platform Duolingo, developed using Next.js 13 for its server-rendered capabilities and optimized performance. The app provides users with interactive lessons in multiple languages, utilizing Drizzle ORM and Neon DB for efficient data handling. It incorporates ElevenLabs AI for generating language exercises, creating a personalized learning experience. Users can engage in speaking, listening, and writing exercises with gamified elements such as points, levels, and streaks. The app also includes a comprehensive progress tracking dashboard, allowing users to monitor their learning journey and adjust goals accordingly.",
  img: "/b2.webp",
};

interface Props {
  params: { id: string };
}

const DetailsPage = ({ params: { id } }: Props) => {
  const router = useRouter();

  return (
    <div className="px-6">
      <div className="max-w-screen-lg mx-auto py-12 pt-28 text-brand-purple">
        <h2 className="text-brand-purple text-xl font-semibold mb-4">
          {post && <Link href={`/blogs/${post.id}`}>{post.title}</Link>}
        </h2>
        <img
          className="mb-5 h-[360px] sm:h-[500px] w-full bg-no-repeat object-cover object-center rounded-lg"
          src={post.img}
          alt={post.title}
        />
        <main className="flex flex-col justify-center">
          <div className=" flex w-full flex-col items-start justify-center md:flex-row">
            <div className="flex w-full flex-col">
              <h2>
                {post && (
                  <Link
                    href={`/blogs/${post.id}`}
                    className="text-brand-purple text-2xl sm:text-3xl"
                  >
                    {post.title}
                  </Link>
                )}
              </h2>
              {post && (
                <>
                  <div className="flex items-center gap-2 my-5">
                    <img
                      className="h-8 w-8 rounded-full"
                      src="/img.jpeg"
                      alt={post.title}
                    />
                    <AuthorAttribution />
                  </div>
                  <hr className="w-full border-t border-brand-purple pb-8" />
                  <p className="text-base font-medium">{post.description}</p>
                </>
              )}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default DetailsPage;
