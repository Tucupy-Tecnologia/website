import { Hero } from "@/components/hero";
import Navbar from "@/components/navbar";

export default function Home() {


  return (
    <div className="bg-background h-screen">
      <Navbar />
      <Hero />
    </div>
  );
}
