'use client';

import { Button } from '@/components/ui/button';

interface CareersContentProps {
  dict: Record<string, any>;
}

export function CareersContent({ dict }: CareersContentProps) {
  const handleScrollToPositions = () => {
    document.getElementById('application-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Button
      className="text-sm/6 font-semibold text-foreground ring ring-gray-400/20"
      onClick={handleScrollToPositions}
    >
      {dict.careers.applicationForm.form.send} <span aria-hidden="true">→</span>
    </Button>
  );
}