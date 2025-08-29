import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/navbar";

export default function Page() {
  return (
    <div className="bg-background min-h-screen space-y-16">
      <Navbar />
      <main className="max-w-6xl px-4 mx-auto">
        <div className="max-w-3xl mb-10 mt-20">
          <div className="hidden sm:mb-8 sm:flex sm:justify-start">
            <div className="relative rounded-full px-3 py-1 text-sm/6 text-foreground ring-1 ring-gray-400/20 hover:ring-gray-400/30">
              Careers at Tucupy
            </div>
          </div>
          <div className="text-left">
            <h1 className="text-5xl font-semibold">We're on a mission to deliver exceptional software solutions</h1>
            <p className="mt-8 text-lg font-medium text-pretty text-muted-foreground sm:text-xl/8">
              Explore career opportunities and join our team of experts shaping the future of technology.
            </p>
            <div className="mt-10 flex items-center justify-start gap-x-4">
              <Button variant="brand">
                Let's work together
              </Button>
              <Button className="text-sm/6 font-semibold text-foreground ring ring-gray-400/20">
                Open positions <span aria-hidden="true">→</span>
              </Button>
            </div>
          </div>
        </div>
        <div className="mt-32">
          <h2 className="text-base/7 font-semibold text-muted-foreground">Office culture</h2>
          <p className="mt-2 text-3xl font-semibold tracking-tight text-pretty text-foreground">
            Building excellence through in-person collaboration
          </p>
          <p className="mt-4 text-lg/8 text-muted-foreground max-w-3xl">
            We believe in-person collaboration is essential for building meaningful connections, making quick strategic decisions, and creating a dynamic team culture. Our office environment is designed to foster engagement, creativity, and the close-knit relationships that drive exceptional results for our clients. Therefore, interested candidates need to be able to commute to our office in San Francisco.
          </p>
        </div>
      </main>
    </div>
  )
}
