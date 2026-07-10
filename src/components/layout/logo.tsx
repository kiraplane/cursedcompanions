'use client';

import { cn } from '@/lib/utils';
import Image from 'next/image';

export function Logo({ className }: { className?: string }) {
  return (
    <span
      aria-label="Cursed Companions Wiki logo"
      title="Cursed Companions Wiki"
      className={cn(
        'relative inline-flex size-9 shrink-0 items-center justify-center overflow-hidden rounded-md',
        'bg-[#061313] shadow-[0_0_24px_rgba(255,61,120,0.24)]',
        className
      )}
    >
      <Image
        src="/android-chrome-192x192.png"
        alt=""
        fill
        sizes="36px"
        className="object-cover"
      />
    </span>
  );
}
