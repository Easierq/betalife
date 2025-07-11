import {
  Blocks,
  Bot,
  LineChart,
  Film,
  MessageCircle,
  Settings2,
} from "lucide-react";
import React from "react";

const features = [
  {
    icon: Settings2,
    title: "Search Engine Optimization (SEO)",
    description:
      "Rank higher on Google and get discovered by your ideal customers with a solid SEO strategy.",
  },
  {
    icon: Blocks,
    title: "Paid Advertising (PPC)",
    description:
      "From Google to Meta Ads, I create and manage campaigns that drive ROI and sales.",
  },
  {
    icon: Bot,
    title: "Social Media Marketing",
    description:
      "Build engaged communities and boost brand awareness across Instagram, Facebook, LinkedIn, and more.",
  },
  {
    icon: Film,
    title: "Content Marketing",
    description:
      "Turn readers into customers with blogs, emails, and landing pages crafted to convert.",
  },
  {
    icon: LineChart,
    title: "Marketing Strategy & Funnels",
    description:
      "Let’s map out your customer journey and plug the leaks — from lead to loyalty.",
  },
  {
    icon: MessageCircle,
    title: "Email Marketing",
    description:
      "Nurture leads, boost retention, and drive more revenue with targeted email campaigns and automated flows that feel personal.",
  },
];

const Services = () => {
  return (
    <div id="features" className="w-full py-12 xs:py-20 px-6">
      <h2 className="max-w-screen-lg mx-auto mb-8 text-2xl font-semibold tracking-tight text-gray-800">
        Expose Your Business
      </h2>
      <div className="w-full max-w-screen-lg mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="flex flex-col bg-transparent border border-slate-100/80 rounded-xl py-6 px-5"
          >
            <div className="mb-3 h-10 w-10 flex items-center justify-center bg-muted rounded-full">
              <feature.icon className="h-6 w-6" />
            </div>
            <span className="text-lg font-semibold">{feature.title}</span>
            <p className="mt-1 text-foreground/80 text-[15px]">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
