// src/components/contact-card.tsx
'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';

interface ContactCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export function ContactCard({ className, children, ...props }: ContactCardProps) {
  const cardRef = React.useRef<HTMLDivElement>(null);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (cardRef.current) {
      const rect = cardRef.current.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;

      cardRef.current.style.setProperty('--glow-x', `${x}px`);
      cardRef.current.style.setProperty('--glow-y', `${y}px`);
    }
  };

  return (
    <div
      ref={cardRef}
      className={cn(
        'contact-card relative overflow-hidden rounded-lg p-8 md:p-12 lg:p-16 border border-transparent group',
        className
      )}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => {
        // Optional: Reset position when mouse leaves
        if (cardRef.current) {
           cardRef.current.style.setProperty('--glow-x', `50%`);
           cardRef.current.style.setProperty('--glow-y', `50%`);
        }
      }}
      {...props}
    >
      {/* Hover Glow Effect */}
      <div className="absolute inset-0 contact-glow pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"></div>

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
