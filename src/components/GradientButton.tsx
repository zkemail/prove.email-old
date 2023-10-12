import { cn } from "@/lib/utils";
import Link from "next/link";
import { buttonVariants } from "./ui/button";

interface GradientButtonProps {
  href: string;
  children: React.ReactNode;
  buttonStyle?: string;
  containerStyle?: string;
}

const GradientButton = ({
  children,
  href,
  buttonStyle,
  containerStyle,
}: GradientButtonProps) => {
  return (
    <div
      className={cn(
        "bg-gradient-to-br w-fit from-blue-300 via-violet-300 to-orange-300 rounded p-[1px]",
        containerStyle
      )}
    >
      <Link
        href={href}
        target="_blank"
        className={cn(
          buttonVariants({ variant: "ghost" }),
          "bg-tertiary dark:bg-tertiary-foreground text-tertiary-foreground font-normal dark:text-primary rounded hover:dark:bg-tertiary-foreground/80",
          buttonStyle
        )}
      >
        {children}
      </Link>
    </div>
  );
};

export default GradientButton;
