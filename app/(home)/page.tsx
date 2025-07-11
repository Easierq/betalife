import About from "@/components/about";
import Blogs from "@/components/blogs";
import CTABanner from "@/components/cta-banner";
import FAQ from "@/components/faq";
import Hero from "@/components/hero";
import HeroTestimonial from "@/components/hero-testimonial";
import Services from "@/components/services";
import Works from "@/components/works";

export default function Home() {
  return (
    <div className="space-y-5 text-brand-purple">
      <Hero />
      <About />
      <Works />
      <Services />
      <Blogs />
      <HeroTestimonial />
      <FAQ />
      <CTABanner />
    </div>
  );
}
