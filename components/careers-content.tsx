'use client';

import { Button } from '@/components/ui/button';

interface CareersContentProps {
  lang: string;
  dict: any;
}

export function CareersContent({ lang, dict }: CareersContentProps) {
  const handleScrollToPositions = () => {
    document.getElementById('open-positions')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Button
      className="text-sm/6 font-semibold text-foreground ring ring-gray-400/20"
      onClick={handleScrollToPositions}
    >
      {dict.careers.openPositions.buttonText} <span aria-hidden="true">→</span>
    </Button>
  );
}