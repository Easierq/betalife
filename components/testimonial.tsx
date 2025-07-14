"use client";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import { Testimonial } from "@/types";
import { StarIcon } from "lucide-react";
import { useEffect, useState } from "react";

interface Props {
  data: Testimonial[];
}

const Testimonials = ({ data }: Props) => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <div className="px-6">
      <div
        id="testimonials"
        className="w-full max-w-screen-lg mx-auto py-6 lg:py-12"
      >
        <h2 className="max-w-screen-lg mx-auto mb-8 text-2xl font-semibold tracking-tight text-gray-800">
          Testimonials
        </h2>
        <div className="container w-full mx-auto">
          <Carousel setApi={setApi}>
            <CarouselContent>
              {data.map((testimonial) => (
                <CarouselItem key={testimonial.id}>
                  <TestimonialCard testimonial={testimonial} />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
          <div className="flex items-center justify-center gap-2">
            {Array.from({ length: count }).map((_, index) => (
              <button
                key={index}
                onClick={() => api?.scrollTo(index)}
                className={cn(
                  "h-3.5 w-3.5 rounded-full border border-brand-purple",
                  {
                    "bg-brand-purple border-brandbg-brand-purple":
                      current === index + 1,
                  }
                )}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => (
  <div className="mb-8 bg-slate-50/80 border border-slate-100 rounded-xl py-8 px-6 sm:py-6">
    <div className="flex items-center justify-between gap-20">
      <div className="flex flex-col justify-center">
        <div className="flex items-center justify-between gap-1">
          <div className="flex items-center gap-1">
            <StarIcon className="w-5 h-5 fill-yellow-400 stroke-branfill-yellow-400" />
            <StarIcon className="w-5 h-5 fill-yellow-400 stroke-branfill-yellow-400" />
            <StarIcon className="w-5 h-5 fill-yellow-400 stroke-branfill-yellow-400" />
            <StarIcon className="w-5 h-5 fill-yellow-400 stroke-branfill-yellow-400" />
            <StarIcon className="w-5 h-5 fill-yellow-400 stroke-branfill-yellow-400" />
          </div>
        </div>
        <p className="mt-6 text-lg sm:text-xl leading-normal lg:!leading-normal font-semibold tracking-tight text-slate-700">
          &quot;{testimonial.testimonial}&quot;
        </p>
        <div className="flex sm:hidden md:flex mt-6 items-center gap-2">
          <Avatar>
            <AvatarFallback className="text-xl font-medium bg-primary text-primary-foreground">
              {testimonial.name.charAt(0)}
            </AvatarFallback>
          </Avatar>
          <div>
            <p className="text-base font-semibold text-slate-800">
              {testimonial.name}
            </p>
            <p className="text-sm font-medium text-slate-600">
              {testimonial.profession}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Testimonials;
