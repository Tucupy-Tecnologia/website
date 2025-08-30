'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { Button } from '@/components/ui/button';
import {
  Lightbulb,
  Users,
  Heart,
  Trophy,
  Rocket,
  Target,
  CheckCircle2,
  Building2,
  Activity,
  MapPin,
  Code,
  MessageSquare,
  Briefcase,
} from 'lucide-react';

const stats = [
  { label: 'Active Users in Our Projects', value: '250.000+' },
  { label: 'Average Launch Time', value: '6–10 weeks' },
  { label: 'Client Satisfaction', value: '98%' },
  { label: 'Years Building', value: '10+' },
];

const principles = [
  {
    icon: <Lightbulb className="w-5 h-5 text-muted-foreground" />,
    title: 'Think Clearly',
    description:
      'Simple solutions beat complex ones. We design for clarity first.',
  },
  {
    icon: <Users className="w-5 h-5 text-muted-foreground" />,
    title: 'Small, Senior Teams',
    description:
      'Experienced squads ship faster, with fewer handoffs and more ownership.',
  },
  {
    icon: <Heart className="w-5 h-5 text-muted-foreground" />,
    title: 'Care Deeply',
    description:
      'We obsess over quality and outcomes that matter for our clients.',
  },
  {
    icon: <Trophy className="w-5 h-5 text-muted-foreground" />,
    title: 'Raise the Bar',
    description:
      'We review, iterate, and continuously improve how we build and deliver.',
  },
  {
    icon: <Rocket className="w-5 h-5 text-muted-foreground" />,
    title: 'Bias to Ship',
    description:
      'Momentum compounds. We deliver value early and often, then refine.',
  },
  {
    icon: <Target className="w-5 h-5 text-muted-foreground" />,
    title: 'Own the Outcome',
    description:
      'We operate like owners and measure success by client impact.',
  },
];

const howWeWork = [
  {
    icon: <Building2 className="w-5 h-5 text-muted-foreground" />,
    title: 'In-Person by Design',
    description:
      'Co-located teamwork accelerates decisions and unlocks creative flow.',
  },
  {
    icon: <Code className="w-5 h-5 text-muted-foreground" />,
    title: 'Engineering Rigor',
    description:
      'Clean abstractions, thoughtful architecture, and reliable delivery.',
  },
  {
    icon: <MessageSquare className="w-5 h-5 text-muted-foreground" />,
    title: 'Transparent Comms',
    description:
      'Clear weekly updates, demos, and a shared roadmap—no black boxes.',
  },
  {
    icon: <CheckCircle2 className="w-5 h-5 text-muted-foreground" />,
    title: 'Results > Hours',
    description:
      'We optimize for outcomes, not timesheets. Quality and speed together.',
  },
];


export default function AboutPage() {
  const router = useRouter();

  const handleContactClick = () => {
    router.push('/#contact');
  };

  const handleProjectsClick = () => {
    router.push('/#projects');
  };

  return (
    <div className="bg-background min-h-screen space-y-16">
      <Navbar />
      <main className="max-w-6xl px-4 mx-auto">
        {/* Hero */}
        <section className="max-w-3xl mb-10 mt-20">
          <div className="hidden sm:mb-8 sm:flex sm:justify-start">
            <div className="relative rounded-full px-3 py-1 text-sm/6 text-foreground ring-1 ring-gray-400/20 hover:ring-gray-400/30">
              About Tucupy
            </div>
          </div>
          <div className="text-left">
            <h1 className="text-5xl font-semibold">
              We build reliable software with speed and care
            </h1>
            <p className="mt-8 text-lg font-medium text-pretty text-muted-foreground sm:text-xl/8">
              We’re a hands-on team that partners with ambitious companies to
              ship products that scale. Small, senior squads. Clear ownership.
              Zero drama—just great software.
            </p>
            <div className="mt-10 flex items-center justify-start gap-x-4">
              <Button
                variant="brand"
                onClick={handleContactClick}
              >
                Let&apos;s build together
              </Button>
              <Button
                className="text-sm/6 font-semibold text-foreground ring ring-gray-400/20"
                onClick={handleProjectsClick}
              >
                See our work <span aria-hidden="true">→</span>
              </Button>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="mt-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((s, i) => (
              <div
                key={i}
                className="bg-primary border border-gray-400/20 rounded-lg p-6"
              >
                <p className="text-2xl font-semibold text-foreground">
                  {s.value}
                </p>
                <p className="mt-2 text-sm text-muted-foreground">{s.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Principles */}
        <section className="mt-32">
          <h2 className="text-base/7 font-semibold text-muted-foreground">
            Our principles
          </h2>
          <p className="mt-2 text-3xl font-semibold tracking-tight text-pretty text-foreground">
            How we make software that lasts
          </p>
          <p className="mt-4 text-lg/8 text-muted-foreground max-w-3xl">
            These principles guide how we think, build, and collaborate—with our
            clients and with each other.
          </p>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {principles.map((p, i) => (
              <div
                key={i}
                className="bg-primary border border-gray-400/20 rounded-lg py-6 px-5 hover:border-gray-400/30 transition-colors duration-200"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-background border border-gray-400/20 rounded-md p-2">
                    {p.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground">{p.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      {p.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* How we work */}
        <section className="mt-32">
          <h2 className="text-base/7 font-semibold text-muted-foreground">
            How we work
          </h2>
          <p className="mt-2 text-3xl font-semibold tracking-tight text-pretty text-foreground">
            Craftsmanship meets speed
          </p>
          <p className="mt-4 text-lg/8 text-muted-foreground max-w-3xl">
            We favor small, senior teams that move quickly and own outcomes end
            to end. Fewer handoffs, sharper thinking, faster delivery.
          </p>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {howWeWork.map((item, i) => (
              <div
                key={i}
                className="bg-primary border border-gray-400/20 rounded-lg p-6"
              >
                <div className="flex items-center gap-3 mb-3">
                  {item.icon}
                  <h3 className="font-semibold text-foreground">{item.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </section>


        {/* Where we are */}
        <section className="mt-32">
          <h2 className="text-base/7 font-semibold text-muted-foreground">
            Where we are
          </h2>
          <p className="mt-2 text-3xl font-semibold tracking-tight text-pretty text-foreground">
            Built in-office for speed and focus
          </p>
          <p className="mt-4 text-lg/8 text-muted-foreground max-w-3xl">
            We’re fully in-person. It’s how we make faster decisions, build
            tighter feedback loops, and ship with confidence.
          </p>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-primary border border-gray-400/20 rounded-lg p-6">
              <div className="flex items-center gap-3 mb-3">
                <MapPin className="w-5 h-5 text-muted-foreground" />
                <h3 className="font-semibold text-foreground">Office</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Ed. Connext, Salas 807-808
                <br />
                Tv. Dom Romualdo de Seixas, 1560
                <br />
                Umarizal, Belém - PA
              </p>
            </div>
            <div className="bg-primary border border-gray-400/20 rounded-lg p-6">
              <div className="flex items-center gap-3 mb-3">
                <Activity className="w-5 h-5 text-muted-foreground" />
                <h3 className="font-semibold text-foreground">What we do</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Product strategy, web & platform engineering, cloud, and
                end‑to‑end delivery.
              </p>
            </div>
            <div className="bg-primary border border-gray-400/20 rounded-lg p-6">
              <div className="flex items-center gap-3 mb-3">
                <Briefcase className="w-5 h-5 text-muted-foreground" />
                <h3 className="font-semibold text-foreground">Who we help</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Startups shipping MVPs and companies scaling to millions of
                users.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="mt-4 mb-20">
          <div className="bg-primary border border-gray-400/20 rounded-lg p-8 md:p-10">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div>
                <h3 className="text-2xl font-semibold text-foreground">
                  Ready to build something great?
                </h3>
                <p className="mt-2 text-muted-foreground">
                  Tell us about your product and timeline. We’ll get back within
                  24 hours.
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Button
                  variant="brand"
                  onClick={handleContactClick}
                >
                  Start a project
                </Button>
                <Link href="/careers">
                  <Button variant="ghost" className="font-medium hover:text-foreground">
                    Join the team
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
