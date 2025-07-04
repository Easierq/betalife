import About from "@/components/about";
import Blogs from "@/components/blogs";
import CTABanner from "@/components/cta-banner";
import FAQ from "@/components/faq";
import Hero from "@/components/hero";
import Services from "@/components/services";
import Testimonial from "@/components/testimonial";
import Works from "@/components/works";

export default function Home() {
  return (
    <div className="space-y-5 text-brand-purple">
      <Hero />
      <About />
      <Works />
      <Services />
      <Blogs />
      <Testimonial />
      <FAQ />
      <CTABanner />
    </div>
  );
}
