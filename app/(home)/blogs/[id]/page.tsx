import AuthorAttribution from "@/components/author";
import { getData } from "@/lib/get-data";
import { Blog } from "@/types";
import Link from "next/link";

const baseUrl = "https://ibetalife-admin.vercel.app/api";

interface Props {
  params: { id: string };
}

const DetailsPage = async ({ params: { id } }: Props) => {
  const post = await getData<Blog>(`${baseUrl}/blogs/${id}`);
  return (
    <div className="px-6">
      <div className="max-w-screen-lg mx-auto py-12 pt-28 text-slate-800">
        <h2 className="text-slate-800 text-xl font-semibold mb-4">
          {post && <Link href={`/blogs/${post.id}`}>{post.title}</Link>}
        </h2>
        <img
          className="mb-5 h-[360px] sm:h-[500px] w-full bg-no-repeat object-cover object-center rounded-lg"
          src={post.imageUrl}
          alt={post.title}
        />
        <main className="flex flex-col justify-center">
          <div className=" flex w-full flex-col items-start justify-center md:flex-row">
            <div className="flex w-full flex-col">
              <h2>
                {post && (
                  <Link
                    href={`/blogs/${post.id}`}
                    className="text-slate-800 text-2xl sm:text-3xl"
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
                  <hr className="w-full border-t border-slate-500 text-slate-800 pb-8" />
                  <p className="leading-normal">{post.description}</p>
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
