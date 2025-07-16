import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface CtaButtonProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export const CtaButton = ({ href, children, className }: CtaButtonProps) => {
  return (
    <Button variant="hero" size="lg" className={cn("group", className)} asChild>
      <Link href={href}>
        {children}
        <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
      </Link>
    </Button>
  );
};
