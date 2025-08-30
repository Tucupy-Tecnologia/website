'use client';

import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';

interface AboutContentProps {
  lang: string;
  dict: Record<string, any>;
}

export function AboutContent({ lang, dict }: AboutContentProps) {
  const router = useRouter();

  const handleContactClick = () => {
    router.push(`/${lang}#contact`);
  };

  const handleProjectsClick = () => {
    router.push(`/${lang}#projects`);
  };

  return (
    <div className="mt-10 flex items-center justify-start gap-x-4">
      <Button
        variant="brand"
        onClick={handleContactClick}
      >
        {dict.about.buttons.buildTogether}
      </Button>
      <Button
        className="text-sm/6 font-semibold text-foreground ring ring-gray-400/20"
        onClick={handleProjectsClick}
      >
        {dict.about.buttons.seeOurWork} <span aria-hidden="true">→</span>
      </Button>
    </div>
  );
}