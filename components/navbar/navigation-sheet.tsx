import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Link from "next/link";

export const NavigationSheet = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="rounded-full border-none bg-brand-purple hover:bg-brand-purple/90 text-white hover:text-white/95"
        >
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent className="pt-3 px-6 text-brand-purple border-none">
        <div className="flex flex-col space-y-8 mt-20 text-xl font-bold">
          <SheetClose className="text-start" asChild>
            <Link href="/#about">About</Link>
          </SheetClose>
          <SheetClose className="text-start" asChild>
            <Link href="/#blogs">Blogs</Link>
          </SheetClose>
          <SheetClose className="text-start" asChild>
            <Link href="/#works">Works</Link>
          </SheetClose>
          <SheetClose className="text-start" asChild>
            <Link href="/#faq">FAQs</Link>
          </SheetClose>
          <SheetClose className="text-start" asChild>
            <Link href="/#works">Our Work</Link>
          </SheetClose>
        </div>
      </SheetContent>
    </Sheet>
  );
};
