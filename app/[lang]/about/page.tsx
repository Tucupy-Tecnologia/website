import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { getDictionary } from '../dictionaries';
import { AboutContent } from '@/components/about-content';
import { AboutCTA } from '@/components/about-cta';
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

export default async function AboutPage({
  params,
}: {
  params: Promise<{ lang: 'en' | 'pt' | 'es' | 'fr' }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  const principles = [
    {
      icon: <Lightbulb className="w-5 h-5 text-muted-foreground" />,
      title: dict.about.principles.items[0].title,
      description: dict.about.principles.items[0].description,
    },
    {
      icon: <Users className="w-5 h-5 text-muted-foreground" />,
      title: dict.about.principles.items[1].title,
      description: dict.about.principles.items[1].description,
    },
    {
      icon: <Heart className="w-5 h-5 text-muted-foreground" />,
      title: dict.about.principles.items[2].title,
      description: dict.about.principles.items[2].description,
    },
    {
      icon: <Trophy className="w-5 h-5 text-muted-foreground" />,
      title: dict.about.principles.items[3].title,
      description: dict.about.principles.items[3].description,
    },
    {
      icon: <Rocket className="w-5 h-5 text-muted-foreground" />,
      title: dict.about.principles.items[4].title,
      description: dict.about.principles.items[4].description,
    },
    {
      icon: <Target className="w-5 h-5 text-muted-foreground" />,
      title: dict.about.principles.items[5].title,
      description: dict.about.principles.items[5].description,
    },
  ];

  const howWeWork = [
    {
      icon: <Building2 className="w-5 h-5 text-muted-foreground" />,
      title: dict.about.howWeWork.items[0].title,
      description: dict.about.howWeWork.items[0].description,
    },
    {
      icon: <Code className="w-5 h-5 text-muted-foreground" />,
      title: dict.about.howWeWork.items[1].title,
      description: dict.about.howWeWork.items[1].description,
    },
    {
      icon: <MessageSquare className="w-5 h-5 text-muted-foreground" />,
      title: dict.about.howWeWork.items[2].title,
      description: dict.about.howWeWork.items[2].description,
    },
    {
      icon: <CheckCircle2 className="w-5 h-5 text-muted-foreground" />,
      title: dict.about.howWeWork.items[3].title,
      description: dict.about.howWeWork.items[3].description,
    },
  ];

  return (
    <div className="bg-background min-h-screen space-y-16">
      <Navbar lang={lang} dict={dict} />
      <main className="max-w-6xl px-4 mx-auto">
        {/* Hero */}
        <section className="max-w-3xl mb-10 mt-20">
          <div className="hidden sm:mb-8 sm:flex sm:justify-start">
            <div className="relative rounded-full px-3 py-1 text-sm/6 text-foreground ring-1 ring-gray-400/20 hover:ring-gray-400/30">
              {dict.about.hero.badge}
            </div>
          </div>
          <div className="text-left">
            <h1 className="text-5xl font-semibold">
              {dict.about.hero.title}
            </h1>
            <p className="mt-8 text-lg font-medium text-pretty text-muted-foreground sm:text-xl/8">
              {dict.about.hero.description}
            </p>
            <AboutContent lang={lang} dict={dict} />
          </div>
        </section>

        {/* Stats */}
        <section className="mt-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {dict.about.stats.map((s, i) => (
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
            {dict.about.principles.section}
          </h2>
          <p className="mt-2 text-3xl font-semibold tracking-tight text-pretty text-foreground">
            {dict.about.principles.title}
          </p>
          <p className="mt-4 text-lg/8 text-muted-foreground max-w-3xl">
            {dict.about.principles.description}
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
            {dict.about.howWeWork.section}
          </h2>
          <p className="mt-2 text-3xl font-semibold tracking-tight text-pretty text-foreground">
            {dict.about.howWeWork.title}
          </p>
          <p className="mt-4 text-lg/8 text-muted-foreground max-w-3xl">
            {dict.about.howWeWork.description}
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
            {dict.about.location.section}
          </h2>
          <p className="mt-2 text-3xl font-semibold tracking-tight text-pretty text-foreground">
            {dict.about.location.title}
          </p>
          <p className="mt-4 text-lg/8 text-muted-foreground max-w-3xl">
            {dict.about.location.description}
          </p>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-primary border border-gray-400/20 rounded-lg p-6">
              <div className="flex items-center gap-3 mb-3">
                <MapPin className="w-5 h-5 text-muted-foreground" />
                <h3 className="font-semibold text-foreground">{dict.about.location.office.title}</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                {dict.about.location.office.address.split('\n').map((line, i) => (
                  <span key={i}>
                    {line}
                    {i < dict.about.location.office.address.split('\n').length - 1 && <br />}
                  </span>
                ))}
              </p>
            </div>
            <div className="bg-primary border border-gray-400/20 rounded-lg p-6">
              <div className="flex items-center gap-3 mb-3">
                <Activity className="w-5 h-5 text-muted-foreground" />
                <h3 className="font-semibold text-foreground">{dict.about.location.whatWeDo.title}</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                {dict.about.location.whatWeDo.description}
              </p>
            </div>
            <div className="bg-primary border border-gray-400/20 rounded-lg p-6">
              <div className="flex items-center gap-3 mb-3">
                <Briefcase className="w-5 h-5 text-muted-foreground" />
                <h3 className="font-semibold text-foreground">{dict.about.location.whoWeHelp.title}</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                {dict.about.location.whoWeHelp.description}
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <AboutCTA dict={dict} />
      </main>
      <Footer lang={lang} dict={dict} />
    </div>
  );
}