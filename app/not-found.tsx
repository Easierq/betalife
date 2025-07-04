"use client";

import Link from "next/link";

import { Button } from "@/components/ui/button";

const NotFoundPage = () => {
  return (
    <div className="h-full min-h-screen flex flex-col space-y-4 items-center justify-center text-muted-foreground">
      <h1 className="text-7xl font-bold text-slate-700">404</h1>
      <p className="font-bold text-slate-600">
        We couldn&apos;t find the page you were looking for.
      </p>
      <Button
        variant="default"
        className="hover:bg-slate-700/90 bg-slate-700 text-white"
        asChild
      >
        <Link href="/">Go back home</Link>
      </Button>
    </div>
  );
};

export default NotFoundPage;
