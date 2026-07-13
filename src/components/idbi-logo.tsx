import { cn } from "@/lib/utils";

/**
 * IDBI Bank wordmark — stylized recreation for prototype use.
 * Uses the recognizable green + orange palette of the IDBI brand
 * without embedding the official trademark asset.
 */
export function IdbiLogo({ className = "h-6 w-auto" }: { className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 font-semibold tracking-tight leading-none",
        className,
      )}
    >
      <span
        aria-hidden
        className="inline-block h-[1.15em] w-[1.15em] rounded-[3px]"
        style={{
          background:
            "linear-gradient(135deg, #0a7a3b 0%, #0a7a3b 55%, #f39200 55%, #f39200 100%)",
        }}
      />
      <span className="text-[#0a7a3b]">IDBI</span>
      <span className="text-[#f39200]">BANK</span>
    </span>
  );
}
