import { ArrowUpRight, Forward } from "lucide-react";
import { Button } from "./ui/button";
// import { AnimatedGridPattern } from "./ui/animated-grid-pattern";
import { cn } from "@/lib/utils";
import AnimatedGridPattern from "./ui/animated-grid-pattern";
import Link from "next/link";

export default function CTABanner() {
  return (
    <div className="px-6">
      <div className="dark:border relative overflow-hidden my-5 w-full dark bg-background text-foreground max-w-screen-lg mx-auto rounded-2xl py-10 md:py-16 px-6 md:px-14">
        <AnimatedGridPattern
          numSquares={30}
          maxOpacity={0.1}
          duration={3}
          className={cn(
            "[mask-image:radial-gradient(400px_circle_at_right,white,rgba(255,255,255,0.6),transparent)]",
            "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12"
          )}
        />
        <div className="relative z-0 flex flex-col gap-3">
          <h3 className="text-3xl md:text-4xl font-semibold">
            Ready to Level Up Your Marketing?
          </h3>
          <p className="mt-2 text-base md:text-lg">
            Whether you’re launching a new product, scaling your service, or
            need a full marketing revamp — I’m here to help you grow smarter.
          </p>
        </div>
        <div className="relative z-0 mt-14 flex flex-col sm:flex-row gap-4">
          <Button
            asChild
            size="lg"
            className="bg-white text-slate-900 hover:bg-white/85"
          >
            <Link href="https://wa.me/message/5564MDZR4ULCL1" target="_blank">
              Get in Touch <ArrowUpRight className="ml-1 h-5 w-5" />
            </Link>
          </Button>
          {/* <Button size="lg" variant="outline">
            Discover More <Forward className="ml-1 h-5 w-5" />
          </Button> */}
        </div>
      </div>
    </div>
  );
}
