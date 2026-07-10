import type { GuideFaq } from '@/data/cursedcompanions/types';
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
        'rounded-lg border border-[#28484A] bg-[#0C2222] p-6 shadow-sm',
        className
      )}
    >
      <h2 className="font-display text-2xl font-bold text-[#F7F2DF]">
        {title}
      </h2>
      <div className="mt-6 grid gap-3">
        {items.map((item) => (
          <details
            key={item.question}
            className="group rounded-lg border border-[#28484A] bg-[#061313] p-4"
          >
            <summary className="cursor-pointer font-semibold text-[#F7F2DF] transition group-open:text-[#D989FF]">
              {item.question}
            </summary>
            <p className="mt-3 text-sm leading-7 text-[#C4D7CF]">
              {item.answer}
            </p>
          </details>
        ))}
      </div>
    </section>
  );
}
