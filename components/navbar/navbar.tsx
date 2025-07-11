import { Button } from "@/components/ui/button";
import { Logo } from "./logo";

import { NavigationSheet } from "./navigation-sheet";
import { MessageSquare } from "lucide-react";
import { WhatsappLogo } from "../icons";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="fixed z-10 top-6 inset-x-4 h-14 bg-white border border-slate-100 backdrop-blur-md bg-opacity-60 max-w-screen-lg mx-auto rounded-full">
      <div className="h-full flex items-center justify-between mx-auto px-3 sm:px-5">
        <Logo />

        {/* Desktop Menu */}
        {/* <NavMenu className="hidden md:block" /> */}

        <div className="flex items-center gap-2">
          <Button
            asChild
            variant="outline"
            size="icon"
            className="rounded-full border border-slate-200 text-black h-9 w-9"
          >
            <Link href="https://wa.me/message/5564MDZR4ULCL1" target="_blank">
              <WhatsappLogo className="w-[18px] h-[18px]" />
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
