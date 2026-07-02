'use client';

import { cn } from '@/lib/utils';
import Image from 'next/image';

export function Logo({ className }: { className?: string }) {
  return (
    <span
      aria-label="Feed The Pit logo"
      title="Feed The Pit"
      className={cn(
        'relative inline-flex size-11 shrink-0 items-center justify-center overflow-hidden rounded-md',
        'border border-[#E3483B]/60 bg-[#0B0708] shadow-[0_0_30px_rgba(227,72,59,0.24)]',
        className
      )}
    >
      <Image
        src="/feedthepit/feed-the-pit-header.jpg"
        alt=""
        fill
        sizes="44px"
        className="object-cover"
      />
    </span>
  );
}
