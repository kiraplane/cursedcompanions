import type { GuideFaq } from '@/data/feedthepit/types';
import { cn } from '@/lib/utils';

export function FaqSection({
  className,
  items,
  title = 'FAQ',
}: {
  className?: string;
  items: GuideFaq[];
  title?: string;
}) {
  return (
    <section
      id="faq"
      className={cn(
        'rounded-lg border border-[#5B3132] bg-[#17100F] p-6 shadow-sm',
        className
      )}
    >
      <h2 className="font-display text-2xl font-bold text-[#F2E7D0]">
        {title}
      </h2>
      <div className="mt-6 grid gap-3">
        {items.map((item) => (
          <details
            key={item.question}
            className="group rounded-lg border border-[#5B3132] bg-[#0B0708] p-4"
          >
            <summary className="cursor-pointer font-semibold text-[#F2E7D0] transition group-open:text-[#E3483B]">
              {item.question}
            </summary>
            <p className="mt-3 text-sm leading-7 text-[#E8D8C2]">
              {item.answer}
            </p>
          </details>
        ))}
      </div>
    </section>
  );
}
