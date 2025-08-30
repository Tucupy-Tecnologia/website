'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';

interface AboutCTAProps {
  dict: Record<string, any>;
}

export function AboutCTA({ dict }: AboutCTAProps) {


  const router = useRouter();

  const handleContactClick = () => {
    router.push('/#contact');
  };

  return (
    <section className="mt-4 mb-20">
      <div className="bg-primary border border-gray-400/20 rounded-lg p-8 md:p-10">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-semibold text-foreground">
              {dict.aboutCta.title}
            </h3>
            <p className="mt-2 text-muted-foreground">
              {dict.aboutCta.description}
            </p>
          </div>
          <div className="flex items-center gap-3">
            <Button
              variant="brand"
              onClick={handleContactClick}
            >
{dict.aboutCta.startProject}
            </Button>
            <Link href="/careers">
              <Button variant="ghost" className="font-medium hover:text-foreground">
{dict.aboutCta.joinTeam}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
