import React from 'react';

interface HighlightTextProps {
  text: string;
  highlights: string[];
  className?: string;
}

export function HighlightText({ text, highlights, className = "text-brand" }: HighlightTextProps) {
  let result = text;
  
  highlights.forEach(highlight => {
    result = result.replace(
      new RegExp(`(${highlight})`, 'gi'),
      `<span class="${className}">$1</span>`
    );
  });
  
  return <span dangerouslySetInnerHTML={{ __html: result }} />;
}