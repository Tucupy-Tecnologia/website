import { Services } from "@/components/services";
import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { Projects } from "@/components/projects";
import { Testimonials } from "@/components/testimonials";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { getDictionary } from "./dictionaries";

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
      <Services lang={lang} dict={dict} />
      <Projects lang={lang} dict={dict} />
      <Testimonials lang={lang} dict={dict} />
      <Contact lang={lang} dict={dict} />
      <Footer lang={lang} dict={dict} />
    </div>
  );
}
