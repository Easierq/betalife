import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { getData } from "@/lib/get-data";
import { Blog } from "@/types";
import Image from "next/image";
import Link from "next/link";

export const revalidate = 0;

const baseUrl = "https://ibetalife-admin.vercel.app/api";

const DetailsPage = async () => {
  const blogs = await getData<Blog[]>(`${baseUrl}/blogs`);

  return (
    <div className="w-full py-12 pt-28 px-6">
      <div id="features" className="max-w-screen-lg mx-auto w-full">
        <h2 className="text-3xl font-semibold tracking-tight text-slate-800 mb-1">
          Our Blogs
        </h2>
        <p>Discover, learn, and grow with our latest articles</p>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-7">
          {blogs.map((blog) => (
            <Card key={blog.title} className="shadow-none">
              <CardHeader className="p-1">
                <div className="relative bg-muted h-52 rounded-tl-xl">
                  <Image
                    src={blog.imageUrl}
                    alt="picture"
                    className="object-cover h-full w-full"
                    fill
                  />
                </div>
              </CardHeader>
              <CardContent className="pt-4 pb-5 px-3">
                <Badge className="capitalize">{blog.category}</Badge>
                <Link href={`/blogs/${blog.id}`}>
                  <h3 className="mt-4 text-xl font-medium tracking-tight hover:underline">
                    {blog.title}
                  </h3>
                </Link>

                <div className="mt-2">
                  <span className="text-slate-700 text-sm">Nov 30, 2024</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
