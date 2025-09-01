import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/navbar";
import { Clock, Users, Lightbulb, Heart, Trophy, Rocket, Target, TrendingUp, Building2, DollarSign, Gift } from "lucide-react";
import { Footer } from "@/components/footer";
import Link from "next/link";
import { getDictionary } from "../dictionaries";
import { CareersContent } from "@/components/careers-content";
import { CareersForm } from "@/components/careers-form";
import { createMetadata } from "@/lib/seo";
import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: 'en' | 'pt' | 'es' | 'fr' }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return createMetadata({
    title: dict.seo.careers.title,
    description: dict.seo.careers.description,
    keywords: dict.seo.careers.keywords,
    url: `/${lang}/careers`,
  });
}

export default async function Page({
  params,
}: {
  params: Promise<{ lang: 'en' | 'pt' | 'es' | 'fr' }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  const values = [
    {
      icon: <Lightbulb className="w-5 h-5 text-muted-foreground" />,
      title: dict.careers.values.items[0].title,
      description: dict.careers.values.items[0].description,
    },
    {
      icon: <Users className="w-5 h-5 text-muted-foreground" />,
      title: dict.careers.values.items[1].title,
      description: dict.careers.values.items[1].description,
    },
    {
      icon: <Heart className="w-5 h-5 text-muted-foreground" />,
      title: dict.careers.values.items[2].title,
      description: dict.careers.values.items[2].description,
    },
    {
      icon: <Trophy className="w-5 h-5 text-muted-foreground" />,
      title: dict.careers.values.items[3].title,
      description: dict.careers.values.items[3].description,
    },
    {
      icon: <Rocket className="w-5 h-5 text-muted-foreground" />,
      title: dict.careers.values.items[4].title,
      description: dict.careers.values.items[4].description,
    },
    {
      icon: <TrendingUp className="w-5 h-5 text-muted-foreground" />,
      title: dict.careers.values.items[5].title,
      description: dict.careers.values.items[5].description,
    }
  ];

  const cultureItems = [
    {
      icon: <Building2 className="w-5 h-5 text-muted-foreground" />,
      title: dict.careers.culture.items[0].title,
      description: dict.careers.culture.items[0].description,
    },
    {
      icon: <Target className="w-5 h-5 text-muted-foreground" />,
      title: dict.careers.culture.items[1].title,
      description: dict.careers.culture.items[1].description,
    },
    {
      icon: <TrendingUp className="w-5 h-5 text-muted-foreground" />,
      title: dict.careers.culture.items[2].title,
      description: dict.careers.culture.items[2].description,
    },
    {
      icon: <Clock className="w-5 h-5 text-muted-foreground" />,
      title: dict.careers.culture.items[3].title,
      description: dict.careers.culture.items[3].description,
    }
  ];

  const benefits = [
    {
      icon: <DollarSign className="w-5 h-5 text-brand" />,
      title: dict.careers.benefits.items[0].title,
      description: dict.careers.benefits.items[0].description,
    },
    {
      icon: <TrendingUp className="w-5 h-5 text-brand" />,
      title: dict.careers.benefits.items[1].title,
      description: dict.careers.benefits.items[1].description,
    },
    {
      icon: <Clock className="w-5 h-5 text-brand" />,
      title: dict.careers.benefits.items[2].title,
      description: dict.careers.benefits.items[2].description,
    },
    {
      icon: <Gift className="w-5 h-5 text-brand" />,
      title: dict.careers.benefits.items[3].title,
      description: dict.careers.benefits.items[3].description,
    },
    {
      icon: <Users className="w-5 h-5 text-brand" />,
      title: dict.careers.benefits.items[4].title,
      description: dict.careers.benefits.items[4].description,
    },
    {
      icon: <Target className="w-5 h-5 text-brand" />,
      title: dict.careers.benefits.items[5].title,
      description: dict.careers.benefits.items[5].description,
    }
  ];

  return (
    <div className="bg-background min-h-screen space-y-16">
      <Navbar lang={lang} dict={dict} />
      <main className="max-w-6xl px-4 mx-auto">
        <div className="max-w-3xl mb-10 mt-20">
          <div className="hidden sm:mb-8 sm:flex sm:justify-start">
            <div className="relative rounded-full px-3 py-1 text-sm/6 text-foreground ring-1 ring-gray-400/20 hover:ring-gray-400/30">
              {dict.careers.hero.badge}
            </div>
          </div>
          <div className="text-left">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold">{dict.careers.hero.title}</h1>
            <p className="mt-6 sm:mt-8 text-base sm:text-lg font-medium text-pretty text-muted-foreground sm:text-xl/8">
              {dict.careers.hero.description}
            </p>
            <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-start sm:items-center justify-start gap-4">
              <Link href={`/${lang}#projects`}>
                <Button variant="brand">
                  {dict.careers.hero.seeOurWork}
                </Button>
              </Link>
              <CareersContent dict={dict} />
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mt-20 sm:mt-32">
          <h2 className="text-base/7 font-semibold text-muted-foreground">{dict.careers.values.section}</h2>
          <p className="mt-2 text-2xl sm:text-3xl font-semibold tracking-tight text-pretty text-foreground">
            {dict.careers.values.title}
          </p>
          <p className="mt-4 text-base sm:text-lg/8 text-muted-foreground max-w-3xl">
            {dict.careers.values.description}
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
          <h2 className="text-base/7 font-semibold text-muted-foreground">{dict.careers.culture.section}</h2>
          <p className="mt-2 text-2xl sm:text-3xl font-semibold tracking-tight text-pretty text-foreground">
            {dict.careers.culture.title}
          </p>
          <p className="mt-4 text-base sm:text-lg/8 text-muted-foreground max-w-3xl">
            {dict.careers.culture.description}
          </p>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
            {cultureItems.map((item, index) => (
              <div key={index} className="bg-primary border border-gray-400/20 rounded-lg p-8">
                <div className="flex items-center gap-3 mb-4">
                  {item.icon}
                  <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
                </div>
                <p className="text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mt-20 sm:mt-32">
          <h2 className="text-base/7 font-semibold text-muted-foreground">{dict.careers.benefits.section}</h2>
          <p className="mt-2 text-2xl sm:text-3xl font-semibold tracking-tight text-pretty text-foreground">
            {dict.careers.benefits.title}
          </p>
          <p className="mt-4 text-base sm:text-lg/8 text-muted-foreground max-w-3xl">
            {dict.careers.benefits.description}
          </p>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-primary border border-gray-400/20 rounded-lg p-6">
                <div className="flex items-center gap-3 mb-3">
                  {benefit.icon}
                  <h3 className="font-semibold text-foreground">{benefit.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Application Form Section */}
        <CareersForm dict={dict} />
      </main>
      <Footer lang={lang} dict={dict} />
    </div>
  )
}
