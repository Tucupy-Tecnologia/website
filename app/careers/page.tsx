'use client';

import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/navbar";
import { MapPin, Clock, Users, Lightbulb, Heart, Trophy, Rocket, Target, TrendingUp, Building2, DollarSign, Gift } from "lucide-react";
import { Footer } from "@/components/footer";
import Link from "next/link";

const values = [
  {
    icon: <Lightbulb className="w-5 h-5 text-muted-foreground" />,
    title: "Innovation First",
    description: "We embrace cutting-edge technologies and creative problem-solving to deliver exceptional solutions."
  },
  {
    icon: <Users className="w-5 h-5 text-muted-foreground" />,
    title: "Collaborative Spirit",
    description: "Success comes from working together, sharing knowledge, and supporting each other's growth."
  },
  {
    icon: <Heart className="w-5 h-5 text-muted-foreground" />,
    title: "Client-Centered",
    description: "We're passionate about understanding and exceeding our clients' expectations in every project."
  },
  {
    icon: <Trophy className="w-5 h-5 text-muted-foreground" />,
    title: "Excellence Always",
    description: "We hold ourselves to the highest standards, constantly pushing boundaries to deliver quality."
  },
  {
    icon: <Rocket className="w-5 h-5 text-muted-foreground" />,
    title: "Fast Execution",
    description: "We move with purpose and precision, delivering results quickly without compromising quality."
  },
  {
    icon: <TrendingUp className="w-5 h-5 text-muted-foreground" />,
    title: "Ownership Mindset",
    description: "We seek people who treat the business as their own and are passionate about growing with us."
  }
];

const openRoles = [
  {
    category: "Engineering",
    positions: [
      {
        title: "Senior Full Stack Engineer",
        location: "In-Office",
        type: "Full-time"
      },
      {
        title: "Frontend Developer",
        location: "In-Office",
        type: "Full-time"
      },
      {
        title: "DevOps Engineer",
        location: "In-Office",
        type: "Full-time"
      }
    ]
  },
  {
    category: "Design",
    positions: [
      {
        title: "Product Designer",
        location: "In-Office",
        type: "Full-time"
      },
      {
        title: "UI/UX Designer",
        location: "In-Office",
        type: "Contract"
      }
    ]
  },
  {
    category: "Product",
    positions: [
      {
        title: "Product Manager",
        location: "In-Office",
        type: "Full-time"
      }
    ]
  }
];

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
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold">We&apos;re on a mission to deliver exceptional software solutions</h1>
            <p className="mt-6 sm:mt-8 text-base sm:text-lg font-medium text-pretty text-muted-foreground sm:text-xl/8">
              Explore career opportunities and join our team of experts shaping the future of technology.
            </p>
            <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-start sm:items-center justify-start gap-4">
              <Link href="/#projects">
                <Button variant="brand">
                  See our work
                </Button>
              </Link>
              <Button
                className="text-sm/6 font-semibold text-foreground ring ring-gray-400/20"
                onClick={() => document.getElementById('open-positions')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Open positions <span aria-hidden="true">→</span>
              </Button>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mt-20 sm:mt-32">
          <h2 className="text-base/7 font-semibold text-muted-foreground">Our values</h2>
          <p className="mt-2 text-2xl sm:text-3xl font-semibold tracking-tight text-pretty text-foreground">
            What drives us forward
          </p>
          <p className="mt-4 text-base sm:text-lg/8 text-muted-foreground max-w-3xl">
            Our values shape everything we do, from how we work together to how we serve our clients.
          </p>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-primary border border-gray-400/20 rounded-lg p-6 hover:border-gray-400/30 transition-colors duration-200"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-background border border-gray-400/20 rounded-md p-2">
                    {value.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground">{value.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      {value.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Office Culture Section */}
        <div className="mt-20 sm:mt-32">
          <h2 className="text-base/7 font-semibold text-muted-foreground">Work culture</h2>
          <p className="mt-2 text-2xl sm:text-3xl font-semibold tracking-tight text-pretty text-foreground">
            In-person collaboration, exceptional results
          </p>
          <p className="mt-4 text-base sm:text-lg/8 text-muted-foreground max-w-3xl">
            We work fully in-person because we believe the best ideas, strongest relationships, and fastest execution happen when talented people work side by side. Our office is where innovation thrives.
          </p>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-primary border border-gray-400/20 rounded-lg p-8">
              <div className="flex items-center gap-3 mb-4">
                <Building2 className="w-5 h-5 text-muted-foreground" />
                <h3 className="text-lg font-semibold text-foreground">100% In-Person Team</h3>
              </div>
              <p className="text-muted-foreground">
                We work together in our office every day. This creates deeper connections, faster decision-making, and the energy that drives breakthrough solutions.
              </p>
            </div>
            <div className="bg-primary border border-gray-400/20 rounded-lg p-8">
              <div className="flex items-center gap-3 mb-4">
                <Target className="w-5 h-5 text-muted-foreground" />
                <h3 className="text-lg font-semibold text-foreground">Results-Focused</h3>
              </div>
              <p className="text-muted-foreground">
                We measure success by outcomes, not hours. Deliver exceptional results and manage your time as you see fit. We trust you to do what&apos;s needed.
              </p>
            </div>
            <div className="bg-primary border border-gray-400/20 rounded-lg p-8">
              <div className="flex items-center gap-3 mb-4">
                <TrendingUp className="w-5 h-5 text-muted-foreground" />
                <h3 className="text-lg font-semibold text-foreground">Grow With Us</h3>
              </div>
              <p className="text-muted-foreground">
                We&apos;re looking for people who see themselves as owners, not employees. Your success is our success, and we&apos;ll grow together.
              </p>
            </div>
            <div className="bg-primary border border-gray-400/20 rounded-lg p-8">
              <div className="flex items-center gap-3 mb-4">
                <Clock className="w-5 h-5 text-muted-foreground" />
                <h3 className="text-lg font-semibold text-foreground">Flexible Schedule</h3>
              </div>
              <p className="text-muted-foreground">
                While we work in-person, we offer flexibility in your daily schedule. Early bird or night owl, structure your day to maximize your productivity.
              </p>
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mt-20 sm:mt-32">
          <h2 className="text-base/7 font-semibold text-muted-foreground">What we offer</h2>
          <p className="mt-2 text-2xl sm:text-3xl font-semibold tracking-tight text-pretty text-foreground">
            Compensation that matches your impact
          </p>
          <p className="mt-4 text-base sm:text-lg/8 text-muted-foreground max-w-3xl">
            We believe in rewarding talent fairly and providing the essentials you need to succeed.
          </p>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-primary border border-gray-400/20 rounded-lg p-6">
              <div className="flex items-center gap-3 mb-3">
                <DollarSign className="w-5 h-5 text-brand" />
                <h3 className="font-semibold text-foreground">Competitive Salary</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Market-rate compensation that reflects your skills and experience. We pay what you&apos;re worth.
              </p>
            </div>
            <div className="bg-primary border border-gray-400/20 rounded-lg p-6">
              <div className="flex items-center gap-3 mb-3">
                <TrendingUp className="w-5 h-5 text-brand" />
                <h3 className="font-semibold text-foreground">Equity Opportunity</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                For exceptional contributors who demonstrate ownership mindset, we offer equity participation to align long-term success.
              </p>
            </div>
            <div className="bg-primary border border-gray-400/20 rounded-lg p-6">
              <div className="flex items-center gap-3 mb-3">
                <Clock className="w-5 h-5 text-brand" />
                <h3 className="font-semibold text-foreground">Flexible Hours</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Structure your workday around your peak productivity. We care about results, not when you clock in.
              </p>
            </div>
            <div className="bg-primary border border-gray-400/20 rounded-lg p-6">
              <div className="flex items-center gap-3 mb-3">
                <Gift className="w-5 h-5 text-brand" />
                <h3 className="font-semibold text-foreground">Premium Equipment</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Top-tier hardware and all the software tools you need. No compromises on the tools of your trade.
              </p>
            </div>
            <div className="bg-primary border border-gray-400/20 rounded-lg p-6">
              <div className="flex items-center gap-3 mb-3">
                <Users className="w-5 h-5 text-brand" />
                <h3 className="font-semibold text-foreground">Team Building</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Regular team events, dinners, and celebrations. We work hard and celebrate our wins together.
              </p>
            </div>
            <div className="bg-primary border border-gray-400/20 rounded-lg p-6">
              <div className="flex items-center gap-3 mb-3">
                <Target className="w-5 h-5 text-brand" />
                <h3 className="font-semibold text-foreground">Career Growth</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Direct mentorship from leadership and clear paths for advancement. Your growth is our priority.
              </p>
            </div>
          </div>
        </div>


        {/* Open Positions Section */}
        <div id="open-positions" className="mt-20 sm:mt-32 scroll-mt-20 mb-20">
          <div className="mb-10">
            <h2 className="text-2xl sm:text-3xl font-semibold text-foreground">Open positions</h2>
            <p className="mt-2 text-base sm:text-lg text-muted-foreground">
              Want to build exceptional digital solutions?<br />
              We&apos;d love to talk to you.
            </p>
          </div>

          <div className="space-y-6">
            {openRoles.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                <h3 className="text-sm font-semibold text-muted-foreground mb-4">{category.category}</h3>
                <div>
                  {category.positions.map((position, positionIndex) => (
                    <div
                      key={positionIndex}
                      className="bg-primary first:border border-gray-400/20 first:border-b-0 border-x last:border-b first:rounded-t-lg last:rounded-b-lg px-4 sm:px-6 py-4 sm:py-5 hover:border-gray-400/30 transition-all duration-200 group cursor-pointer"
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                        <div className="flex-1">
                          <h4 className="text-sm sm:text-base font-medium text-foreground">
                            {position.title}
                          </h4>
                          <div className="flex items-center gap-2 mt-2 sm:hidden">
                            <MapPin className="w-3 h-3 text-muted-foreground" />
                            <span className="text-xs text-muted-foreground">{position.location}</span>
                          </div>
                        </div>
                        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-8">
                          <div className="hidden sm:flex items-center gap-2">
                            <div className="bg-background border border-gray-400/20 rounded-full px-3 py-1 flex items-center gap-2">
                              <MapPin className="w-3 h-3 text-muted-foreground" />
                              <span className="text-sm text-muted-foreground">{position.location}</span>
                            </div>
                          </div>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="text-xs sm:text-sm bg-neutral-500/10 font-medium hover:bg-neutral-500/5 hover:text-foreground w-full sm:w-auto"
                          >
                            Apply for position
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
