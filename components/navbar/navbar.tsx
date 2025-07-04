import { Button } from "@/components/ui/button";
import { Logo } from "./logo";

import { NavigationSheet } from "./navigation-sheet";
import { MessageSquare } from "lucide-react";
import { WhatsappLogo } from "../icons";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="fixed z-10 top-6 inset-x-4 h-14 bg-brand-pink border border-brand-purple max-w-screen-lg mx-auto rounded-full">
      <div className="h-full flex items-center justify-between mx-auto px-3 sm:px-5">
        <Logo />

        {/* Desktop Menu */}
        {/* <NavMenu className="hidden md:block" /> */}

        <div className="flex items-center gap-2">
          <Button
            asChild
            variant="outline"
            className="rounded-full border-none bg-brand-purple hover:bg-brand-purple/90 text-white hover:text-white/95"
            size="icon"
          >
            <Link href="https://wa.me/message/5564MDZR4ULCL1" target="_blank">
              <WhatsappLogo className="w-[20px] h-6[20px]" />
            </Link>
          </Button>
          {/* Mobile Menu */}
          <div className="">
            <NavigationSheet />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
