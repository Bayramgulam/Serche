import Image from "next/image";
import { Bird } from "lucide-react";
import { business } from "@/config/business";
export function Wordmark() {
  return business.logo ? (
    <Image
      className="brand-logo"
      src={business.logo}
      width={165}
      height={65}
      alt={business.name}
    />
  ) : (
    <span className="wordmark">
      <span>kafe</span>sərçə<span className="wordmark-dot">.</span>
    </span>
  );
}
export function Sparrow({ className = "" }: { className?: string }) {
  return <Bird className={className} strokeWidth={1.3} aria-hidden="true" />;
}
