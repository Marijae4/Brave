interface MarqueeProps {
  items: string[];
  className?: string;
}

export function Marquee({ items, className = '' }: MarqueeProps) {
  return (
    <div className={`bg-[#4B7876] overflow-hidden py-4 whitespace-nowrap ${className}`}>
      <div className="inline-flex animate-[marquee_18s_linear_infinite]">
        {[...Array(2)].map((_, i) => (
          <div key={i} className="inline-flex">
            {items.map((item, idx) => (
              <span
                key={idx}
                className="font-['Montserrat'] text-[0.72rem] font-bold tracking-[0.2em] uppercase text-[rgba(255,255,255,0.8)] px-10 flex items-center gap-5 after:content-['✦'] after:text-[rgba(255,255,255,0.4)] after:text-[0.6rem]"
              >
                {item}
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
