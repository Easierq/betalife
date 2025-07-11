"use client";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Link from "next/link";
import {
  FacebookLogo,
  InstagramLogo,
  QuickAccessIcon,
  TiktokLogo,
} from "../icons";
import { Logo } from "./logo";
import { Separator } from "../ui/separator";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export const NavigationSheet = () => {
  const pathname = usePathname();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => setIsClient(true), []);
  if (!isClient)
    return (
      <Button
        variant="outline"
        size="icon"
        className="rounded-full border-none border border-slate-200 text-black h-9 w-9 flex items-center justify-center"
      >
        <QuickAccessIcon className="h-[20px] w-[20px] mb-1 mr-1 cursor-pointer text-black" />
      </Button>
    );

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="rounded-full border-none border border-slate-200 text-black h-9 w-9 flex items-center justify-center"
        >
          <QuickAccessIcon className="h-[20px] w-[20px] mb-1 mr-1 cursor-pointer text-black" />
        </Button>
      </SheetTrigger>
      <SheetContent className="pt-3 text-slate-800 px-0">
        <div className="py-3 px-4">
          <Logo />
          <div className="flex flex-col mt-8 text-slate-700 text-sm w-[90%]">
            <span>
              Discover the most outstanding articles on all topics of life.
              Write your stories and share them
            </span>

            <div className="flex justify-between items-center mt-6">
              {/* <div className="flex gap-2">
                <Button
                  asChild
                  variant="outline"
                  size="icon"
                  className="rounded-full border border-slate-200 text-black h-9 w-9"
                >
                  <Link
                    href="https://wa.me/message/5564MDZR4ULCL1"
                    target="_blank"
                  >
                    <WhatsappLogo className="w-[18px] h-[18px]" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="icon"
                  className="rounded-full border border-slate-200 text-black h-9 w-9"
                >
                  <Link
                    href="https://wa.me/message/5564MDZR4ULCL1"
                    target="_blank"
                  >
                    <WhatsappLogo className="w-[18px] h-[18px]" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="icon"
                  className="rounded-full border border-slate-200 text-black h-9 w-9"
                >
                  <Link
                    href="https://wa.me/message/5564MDZR4ULCL1"
                    target="_blank"
                  >
                    <WhatsappLogo className="w-[18px] h-[18px]" />
                  </Link>
                </Button>
              </div> */}
              <div className="flex items-center gap-5 text-brand-purple">
                <Link
                  href="https://www.tiktok.com/@creativedreyy?_t=ZS-8xfjLFcuiST&_r=1"
                  target="_blank"
                >
                  <TiktokLogo className="h-5 w-5" />
                </Link>
                <Link
                  href="https://www.facebook.com/share/18KXdfkRCw/"
                  target="_blank"
                >
                  <FacebookLogo className="h-5 w-5" />
                </Link>
                <Link
                  href="https://www.instagram.com/creativedrey1?igsh=MWc0enBqMGQ1cWV5eg=="
                  target="_blank"
                >
                  <InstagramLogo className="h-5 w-5" />
                </Link>
              </div>
              <div></div>
            </div>
          </div>
        </div>
        <Separator className="w-full" />
        <div className="flex flex-col py-6 px-2 gap-y-1 text-slate-900 m-4 rounded-xl bg-slate-50/50">
          <SheetClose
            className="text-start flex w-full px-3 font-medium text-sm hover:bg-slate-100/50 rounded-lg py-2"
            asChild
          >
            <Link href="/#about">About</Link>
          </SheetClose>
          <SheetClose
            className="text-start flex w-full px-3 font-medium text-sm hover:bg-slate-100/50 rounded-lg py-2"
            asChild
          >
            <Link href="/#blogs">Blogs</Link>
          </SheetClose>
          <SheetClose
            className="text-start flex w-full px-3 font-medium text-sm hover:bg-slate-100/50 rounded-lg py-2"
            asChild
          >
            <Link href="/#works">Works</Link>
          </SheetClose>
          <SheetClose
            className="text-start flex w-full px-3 font-medium text-sm hover:bg-slate-100/50 rounded-lg py-2"
            asChild
          >
            <Link href="/#faq">FAQs</Link>
          </SheetClose>
          <SheetClose
            className="text-start flex w-full px-3 font-medium text-sm hover:bg-slate-100/50 rounded-lg py-2"
            asChild
          >
            <Link href="/#works">Our Work</Link>
          </SheetClose>
        </div>
      </SheetContent>
    </Sheet>
  );
};
