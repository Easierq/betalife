import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { getData } from "@/lib/get-data";
import { Blog } from "@/types";
import Image from "next/image";
import Link from "next/link";

const baseUrl = "https://ibetalife-admin.vercel.app/api";

// const blogs = [
//   {
//     title: "The Hidden Power of Funnel-Based Marketing",
//     subtitle:
//       "Why most businesses lose customers—and how to fix it with smart funnels.",
//     description:
//       "Most businesses focus heavily on attracting traffic but forget the importance of what happens after the click. Funnel-based marketing is about guiding your audience from awareness to action, step by step. In this post, I break down how to design a high-converting funnel—from lead magnets to email nurture sequences and retargeting ads. I’ll walk you through real examples, common mistakes, and tools you can use (like ConvertKit, Zapier, and Google Tag Manager) to automate and personalize the buyer journey. Whether you’re a coach, eCommerce store, or service provider, having a funnel isn’t optional anymore—it’s the engine of sustainable growth.",
//     picture: "/b1.jpg",
//     id: "/1",
//   },
//   {
//     title: "SEO Is Not Dead: Why Organic Traffic Still Wins in 2025",
//     subtitle:
//       "The long-term marketing strategy too many businesses are ignoring.",
//     description:
//       "Every year, someone declares SEO dead—and every year, search engines drive billions in free traffic to smart businesses. In this post, I uncover why SEO is still one of the most cost-effective and high-ROI strategies, especially when combined with a solid content plan. I discuss the latest algorithm updates, how user intent is changing search behavior, and how to rank in featured snippets and 'People Also Ask' boxes. You’ll also learn about tools like Ahrefs, Surfer SEO, and schema markup strategies that can give you an edge in 2025 and beyond.",
//     picture: "/b2.webp",
//     id: "/1",
//   },
//   {
//     title: "Mastering Facebook & Instagram Ads on a Budget",
//     subtitle: "How to run profitable ad campaigns without spending a fortune.",
//     description:
//       "You don’t need a massive budget to get big results from paid advertising. In this article, I share practical tactics for launching high-performing Meta (Facebook + Instagram) ad campaigns even with a limited budget. Learn how to use the Facebook Ads Manager like a pro, structure campaigns for different stages of the funnel, test creative variations, and scale what works. I also dive into metrics like CTR, CPM, ROAS, and how to make smart decisions from your ad reports. If you're a startup, small business, or solo creator, this blog will help you stretch every dollar.",
//     picture: "/b1.jpg",
//     id: "/1",
//   },
//   {
//     title: "Content That Converts: Writing for Trust, Not Just Traffic",
//     subtitle: "Why storytelling and structure matter more than keywords alone.",
//     description:
//       "Great content doesn’t just bring visitors—it builds trust, authority, and revenue. This blog is all about how to write content that connects with your readers and drives them to act. I cover how to structure blog posts, write magnetic intros, use data-backed storytelling, and integrate subtle calls-to-action that don’t feel salesy. You’ll also discover the psychology of high-converting headlines and how to repurpose one great post into 5+ pieces of content across platforms. If you’ve ever felt like your blog isn’t doing enough, this article will help you fix that.",
//     picture: "/b2.webp",
//     id: "/1",
//   },
//   {
//     title: "Email Marketing Isn’t Dead—You’re Just Doing It Wrong",
//     subtitle: "How to create emails people actually look forward to opening.",
//     description:
//       "Many businesses think email marketing is outdated, but the truth is—it still has one of the highest ROIs in digital marketing. The problem? Most emails are boring, overly promotional, or irrelevant. In this blog, I show you how to write engaging emails that get opened, read, and clicked. From subject lines to segmentation strategies, I explain how to craft compelling sequences and automate them to work while you sleep. You'll also learn about A/B testing, deliverability tips, and how to turn email into a relationship-building machine for your brand.",
//     picture: "/b1.jpg",
//     id: "/1",
//   },
//   {
//     title:
//       "Metrics That Matter: How to Know If Your Marketing Is Actually Working",
//     subtitle: "Stop guessing. Start measuring what drives growth.",
//     description:
//       "Too many marketers and business owners chase vanity metrics like likes and followers—without knowing whether their efforts are driving results. In this post, I break down the key performance indicators (KPIs) you should be tracking depending on your goals: awareness, conversion, retention, or revenue. I cover tools like Google Analytics 4, Meta Ads Manager, and Hotjar, and how to use them to identify bottlenecks and opportunities. Whether you’re running paid ads, SEO, content, or email marketing, this guide will help you stop wasting time on what doesn’t work—and double down on what does.",
//     picture: "/b2.webp",
//     id: "/1",
//   },
// ];

const DetailsPage = async () => {
  const blogs = await getData<Blog[]>(`${baseUrl}/works`);

  const bls = await getData<Blog[]>(`${baseUrl}/works`);
  console.log(baseUrl);

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
                <Badge>{blog.createdAt}</Badge>
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
