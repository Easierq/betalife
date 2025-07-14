import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { getData } from "@/lib/get-data";
import { Work } from "@/types";
import { WorkCard } from "./work-card";

const baseUrl = "https://ibetalife-admin.vercel.app/api";

const Works = async () => {
  const projects = await getData<Work[]>(`${baseUrl}/works`);

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
            <WorkCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Works;
