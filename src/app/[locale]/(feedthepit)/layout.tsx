import {
  AdsterraNativeBanner,
  AdsterraTopBanner,
} from '@/components/ads/adsterra-ad';
import { Footer } from '@/components/layout/footer';
import { Navbar } from '@/components/layout/navbar';
import type { ReactNode } from 'react';

export default function FeedThePitLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar scroll={true} />
      <AdsterraTopBanner />
      <main className="flex-1">{children}</main>
      <AdsterraNativeBanner className="border-[#5B3132] border-t bg-[#0B0708]" />
      <Footer />
    </div>
  );
}
