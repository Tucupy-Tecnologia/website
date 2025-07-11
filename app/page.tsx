import { Services } from "@/components/services";
import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";

export default function Home() {


  return (
    <div className="bg-background min-h-screen">
      <Navbar />
      <Hero />
      <Services />
    </div>
  );
}
