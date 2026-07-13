import logoAsset from "@/assets/vitto-logo.png.asset.json";

export const vittoLogoUrl = logoAsset.url;

export function VittoLogo({ className = "h-8 w-auto" }: { className?: string }) {
  return <img src={vittoLogoUrl} alt="Vitto" className={className} />;
}

export function VittoMark({ className = "h-8 w-8" }: { className?: string }) {
  // Just the star mark, cropped visually via object-fit
  return (
    <div className={className + " overflow-hidden shrink-0"}>
      <img
        src={vittoLogoUrl}
        alt="Vitto"
        className="h-full w-auto object-cover object-left"
        style={{ aspectRatio: "1 / 1" }}
      />
    </div>
  );
}
