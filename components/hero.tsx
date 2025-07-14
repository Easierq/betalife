import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowDown, BadgeDollarSign } from "lucide-react";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="relative h-[92vh] sm:h-[80vh] flex items-center justify-center px-6 pt-24 pb-7 overflow-hidden">
      <div className="absolute bottom-auto left-auto right-0 sm:right-1/4 top-4 h-[240px] sm:h-[300px] w-[240px] sm:w-[300px] -translate-x-[30%] translate-y-[20%] rounded-full bg-[#ff5a4a]/40 opacity-50 blur-[80px]"></div>
      <div className="absolute left-0 sm:left-1/4 right-auto top-10 h-[240px] sm:h-[300px] w-[240px] sm:w-[300px] -translate-x-[30%] translate-y-[20%] rounded-full bg-yellow-100 opacity-50 blur-[80px]"></div>

      <div className="relative z-[1] text-center max-w-screen-lg">
        <Badge className="rounded-full font-medium border-none py-2 px-3 bg-brand-orange hover:bg-brand-lime transition">
          <BadgeDollarSign className="fill-current h-4 w-4 mr-1" />
          Digital Marketer
        </Badge>
        <h1 className="mt-6 text-4xl lg:text-5xl font-medium text-slate-800">
          Grow Your Brand. Amplify Your Impact.
        </h1>
        <p className="mt-6 text-xl text-slate-600 w-[90%] sm:w-[70%] mx-auto">
          I’m{" "}
          <span className="italic text-brand-purple font-semibold">
            Ayomide Dare
          </span>
          , a digital marketer helping businesses attract, convert, and retain
          customers with strategic marketing that works.
        </p>
        <div className="mt-12 flex items-center justify-center gap-4">
          <Button
            asChild
            size="lg"
            className="rounded-full text-base bg-brand-purple hover:bg-brand-purple/90 transition-all"
          >
            <Link href="/#works">
              See What I Do <ArrowDown className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
