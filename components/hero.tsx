import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowDown, BadgeDollarSign } from "lucide-react";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="relative min-h-[70vh] sm:min-h-[80vh] flex items-center justify-center px-6 pt-24 overflow-hidden">
      <div className="relative z-[1] text-center max-w-screen-lg">
        <Badge className="rounded-full font-medium border-none py-2 px-3 bg-brand-orange hover:bg-brand-lime transition">
          <BadgeDollarSign className="fill-current h-4 w-4 mr-1" />
          Digital Marketer
        </Badge>
        <h1 className="mt-6 text-4xl font-medium text-slate-800">
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
