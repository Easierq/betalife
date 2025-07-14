import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { getData } from "@/lib/get-data";
import { Work } from "@/types";

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
}

const baseUrl = "https://ibetalife-admin.vercel.app/api";

const ProjectCard = ({ title, description, imageUrl }: ProjectCardProps) => {
  return (
    <div className="group relative flex flex-col overflow-hidden">
      {/* Project Image */}
      <div className="relative h-64 overflow-hidden bg-accent">
        <Image
          src={imageUrl}
          alt={title}
          className="object-cover transition-transform duration-300 rounded-xl"
          fill
        />
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col py-6">
        <h3 className="mb-4 text-xl font-medium tracking-tight text-card-foreground">
          {title}
        </h3>
        <p className="text-slate-950 text-[15px] mb-4">{description}</p>
      </div>
    </div>
  );
};

const Works = async () => {
  const projects = await getData<Work[]>(`${baseUrl}/works`);

  const projs = [
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
    // {
    //   title: "Email Funnel for Online Course Launch",
    //   description:
    //     "Created a 5-email funnel that generated 1,200+ signups in 2 weeks for an online course launch — using storytelling, urgency, and smart segmentation.",
    //   image: "/b2.webp",
    // },
    {
      title: "Social Media Growth for Beauty Brand",
      description:
        "Managed Instagram and TikTok content strategy for a skincare brand, growing followers by 10K in 60 days and increasing engagement rate to 7%.",
      image: "/b2.webp",
    },
  ];

  return (
    <section id="works" className="relative py-2 px-6">
      <div className="max-w-screen-lg mx-auto">
        <div className="mb-8">
          <Badge variant="secondary" className="mb-4">
            Works
          </Badge>
          <h2 className="max-w-screen-lg mx-auto mb-2 text-2xl font-semibold tracking-tight text-gray-800">
            Featured Work
          </h2>
          <p className="text-slate-800 text-lg">
            Showcasing some of my best projects and technical achievements
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Works;
