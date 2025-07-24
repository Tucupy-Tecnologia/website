import { Services } from "@/components/services";
import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { Projects } from "@/components/projects";
import { Testimonials } from "@/components/testimonials";

export default function Home() {


  return (
    <div className="bg-background min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <Projects />
      <Testimonials />
    </div>
  );
}
