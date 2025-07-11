import { getData } from "@/lib/get-data";
import { Testimonial } from "@/types";
import React from "react";
import Testimonials from "./testimonial";

const baseUrl = "https://ibetalife-admin.vercel.app/api";

const HeroTestimonial = async () => {
  const data = await getData<Testimonial[]>(`${baseUrl}/testimonials`);

  return (
    <div>
      <Testimonials data={data} />
    </div>
  );
};

export default HeroTestimonial;
