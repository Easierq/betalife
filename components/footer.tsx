import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { TiktokLogo, FacebookLogo, InstagramLogo } from "./icons";

const footerLinks = [
  {
    title: "Blogs",
    href: "/blogs",
  },
  {
    title: "Contact",
    href: "/contact",
  },
  {
    title: "Terms & Conditions",
    href: "/terms",
  },
];

const Footer = () => {
  return (
    <footer className="mt-40 dark bg-background text-foreground">
      <div className="max-w-screen-lg mx-auto">
        <div className="py-12 flex flex-col sm:flex-row items-start justify-between gap-x-8 gap-y-10 px-6 xl:px-0">
          <div>
            <Link href="/" className="font-semibold text-xl">
              Betalife.
            </Link>

            <ul className="mt-6 flex items-center gap-4 flex-wrap">
              {footerLinks.map(({ title, href }) => (
                <li key={title}>
                  <Link
                    href={href}
                    className="text-muted-foreground text-sm hover:text-foreground font-semibold"
                  >
                    {title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <Separator />
        <div className="py-8 flex flex-col-reverse sm:flex-row items-center justify-between gap-x-2 gap-y-5 px-6 xl:px-0">
          {/* Copyright */}
          <span className="text-muted-foreground text-center text-sm sm:text-start">
            &copy; {new Date().getFullYear()}{" "}
            <Link href="/" target="_blank">
              Betalife
            </Link>
            . All rights reserved.
          </span>

          <div className="flex items-center gap-5 text-muted-foreground">
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
        </div>
      </div>
    </footer>
  );
};

export default Footer;
