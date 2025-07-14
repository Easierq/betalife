"use client";

import Image from "next/image";
import { useState } from "react";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
}

export const WorkCard = ({
  title,
  description,
  imageUrl,
}: ProjectCardProps) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="group relative flex flex-col overflow-hidden">
        {/* Project Image */}
        <div className="relative h-64 overflow-hidden bg-accent">
          <Image
            src={imageUrl}
            alt={title}
            className="object-cover transition-transform duration-300 rounded-xl"
            fill
          />
        </div>

        {/* Content */}
        <div className="flex-1 flex flex-col py-3">
          <h3 className="mb-3 text-xl font-medium tracking-tight text-card-foreground">
            {title}
          </h3>
          <p className="text-slate-950 text-[15px] mb-3 line-clamp-3">
            {description}
          </p>
          <button
            onClick={() => setOpen(true)}
            className="text-sm text-brand-purple border-2 border-brand-purple p-1 px-2 rounded-[4px] hover:underline w-fit"
          >
            Read more
          </button>
        </div>
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="">
          <div className="border-none overflow-scroll hidden-scrollbar pt-6">
            <div className="flex justify-center items-center">
              <img
                src={imageUrl as string}
                alt="c-pic"
                className="object-cover aspect-video max-w-60 sm:max-w-[300px] rounded-lg"
              />
            </div>
            <div className="space-y-4 py-4">
              <DialogHeader>
                <DialogTitle className="text-center">{title}</DialogTitle>
              </DialogHeader>
              <p className="text-slate-950 text-sm leading-6">{description}</p>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};
