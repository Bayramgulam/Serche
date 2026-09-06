import Image from "next/image";
import { Bird } from "lucide-react";
import { business } from "@/config/business";
// Temporary wordmark. Replace business.logo with the supplied official asset.
export function Wordmark() {
  return business.logo ? (
    <Image src={business.logo} width={150} height={60} alt={business.name} />
  ) : (
    <span className="wordmark">
      <span>kafe</span>sərçə<span className="wordmark-dot">.</span>
    </span>
  );
}
export function Sparrow({ className = "" }: { className?: string }) {
  return <Bird className={className} strokeWidth={1.3} aria-hidden="true" />;
}
