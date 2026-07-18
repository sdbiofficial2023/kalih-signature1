type PlaceholderImageProps = {
  label: string;
  className?: string;
};

/**
 * Stand-in for real photography. The design file referenced temporary
 * AI-generated image URLs that are not safe to ship to production, so every
 * <img> was swapped for this component. Replace with next/image once the
 * client supplies final photos (see PRD.md, "Aset & Konten").
 */
export default function PlaceholderImage({ label, className = "" }: PlaceholderImageProps) {
  return (
    <div
      role="img"
      aria-label={label}
      className={`relative flex items-center justify-center bg-gradient-to-br from-primary/15 via-surface to-primary/5 text-center ${className}`}
    >
      <div className="flex flex-col items-center gap-2 px-4 text-primary/60">
        <span className="material-symbols-outlined text-3xl">image</span>
        <span className="text-xs font-medium leading-snug">{label}</span>
      </div>
    </div>
  );
}
