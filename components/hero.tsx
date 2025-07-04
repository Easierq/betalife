import AnimatedGridPattern from "@/components/ui/animated-grid-pattern";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowDown, BadgeDollarSign } from "lucide-react";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="relative min-h-[80vh] flex items-center justify-center px-6 pt-32 overflow-hidden">
      {/* <AnimatedGridPattern
        numSquares={30}
        maxOpacity={0.1}
        duration={3}
        className={cn(
          "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
          "inset-x-0 h-full skew-y-12"
        )}
      /> */}
      <div className="relative z-[1] text-center max-w-screen-lg">
        <Badge className="rounded-full border-none py-2 px-3 bg-brand-orange hover:bg-brand-navy">
          <BadgeDollarSign className="fill-current h-4 w-4 mr-1" />
          Digital Marketer
        </Badge>
        <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-bold !leading-[1.2] tracking-tight">
          Grow Your Brand. Amplify Your Impact.
        </h1>
        <p className="mt-6 text-2xl sm:text-3xl w-[90%] sm:w-[70%] mx-auto">
          I’m Ayomide Dare, a digital marketer helping businesses attract,
          convert, and retain customers with strategic marketing that works.
        </p>
        <div className="mt-12 flex items-center justify-center gap-4">
          <Button
            asChild
            size="lg"
            className="rounded-full text-base bg-brand-navy hover:bg-brand-navy/90 transition-all"
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
