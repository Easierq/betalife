import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import { GithubLogo } from "./icons";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
}

const ProjectCard = ({ title, description, image }: ProjectCardProps) => {
  return (
    <div className="group relative flex flex-col overflow-hidden rounded-xl border border-brand-purple/20 transition-all hover:border-brand-purple/15">
      {/* Project Image */}
      <div className="relative h-64 overflow-hidden bg-accent">
        <Image
          src={image}
          alt={title}
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          fill
        />
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col p-6">
        <h3 className="text-xl font-semibold mb-2 line-clamp-1">{title}</h3>
        <p className="text-pink-950 mb-4">{description}</p>
      </div>
    </div>
  );
};

const Works = () => {
  const projects = [
    {
      title: "E-commerce Ad Campaign (Facebook + Instagram)",
      description:
        "Scaled an online fashion store’s revenue by 4.5x in 3 months using targeted Meta ad campaigns, retargeting warm audiences, and optimizing creatives for conversions.",
      image: "/b2.webp",
    },
    {
      title: "SEO Overhaul for Local Service Brand",
      description:
        "Boosted a home service company’s website to page 1 of Google for 10+ high-intent keywords, increasing organic traffic by 300% in 6 months.",
      image: "/b2.webp",
    },
    {
      title: "Email Funnel for Online Course Launch",
      description:
        "Created a 5-email funnel that generated 1,200+ signups in 2 weeks for an online course launch — using storytelling, urgency, and smart segmentation.",
      image: "/b2.webp",
    },
    {
      title: "Social Media Growth for Beauty Brand",
      description:
        "Managed Instagram and TikTok content strategy for a skincare brand, growing followers by 10K in 60 days and increasing engagement rate to 7%.",
      image: "/b2.webp",
    },
  ];

  return (
    <section id="works" className="relative py-5 px-6">
      <div className="max-w-screen-lg mx-auto">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4">
            Works
          </Badge>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
            Featured Work
          </h2>
          <p className="text-brand-navy mt-2 sm:mt-4 text-xl font-semibold">
            Showcasing some of my best projects and technical achievements
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Works;
