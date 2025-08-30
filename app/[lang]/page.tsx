import { Services } from "@/components/services";
import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { Projects } from "@/components/projects";
import { Testimonials } from "@/components/testimonials";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { getDictionary } from "./dictionaries";
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
    title: dict.seo.home.title,
    description: dict.seo.home.description,
    keywords: dict.seo.home.keywords,
    url: `/${lang}`,
  });
}

export default async function Home({
  params,
}: {
  params: Promise<{ lang: 'en' | 'pt' | 'es' | 'fr' }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return (
    <div className="bg-background min-h-screen space-y-28">
      <Navbar lang={lang} dict={dict} />
      <Hero lang={lang} dict={dict} />
      <Services dict={dict} />
      <Projects dict={dict} />
      <Testimonials dict={dict} />
      <Contact dict={dict} />
      <Footer lang={lang} dict={dict} />
    </div>
  );
}
