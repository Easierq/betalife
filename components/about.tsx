import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { HTMLAttributes } from "react";

const About = () => {
  return (
    <section id="about" className="relative py-5 px-6">
      <div className="max-w-screen-lg mx-auto">
        <div className="flex flex-col md:flex-row-reverse gap-12">
          <ProfileImage className="hidden md:block" />

          {/* Content */}
          <div className="flex-1 md:text-left">
            <Badge variant="secondary" className="mb-4">
              About Me
            </Badge>
            <ProfileImage className="mt-3 mb-8 block md:hidden" />
            <h2 className="text-4xl font-bold mb-4 tracking-tight">
              Ayomide Dare
            </h2>
            <h2 className="text-3xl font-bold mb-4 tracking-tight">
              Passionate about creating impactful web experiences
            </h2>
            <p className="text-gray-700 mb-6 text-justify">
              Hi, I’m a results-driven digital marketer with a passion for
              turning traffic into loyal customers. Over the years, I’ve worked
              with startups, brands, and entrepreneurs to build data-backed
              campaigns across SEO, social media, content marketing, and paid
              ads. What sets me apart? A strategy-first mindset, relentless
              optimization, and a knack for connecting brand stories with the
              right audience. Whether you need to grow your reach, boost
              conversions, or just get unstuck — I’m here to help.
            </p>
            {/* <div className="flex flex-wrap gap-4 justify-start">
              <Button
                variant="default"
                className="rounded-full bg-sky-700 text-white"
              >
                <GithubLogo className="w-4 h-4 mr-1" />
                View Github
              </Button>
              <Button variant="outline" className="rounded-full">
                <Download className="w-4 h-4 mr-1" />
                Download CV
              </Button>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

const ProfileImage = ({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("mt-10 w-48 h-48 md:w-64 md:h-64", className)} {...props}>
    <div className="relative w-full h-full rounded-2xl overflow-hidden bg-accent">
      <Image src="/img.jpeg" alt="" className="object-cover" fill />
    </div>
  </div>
);
export default About;
