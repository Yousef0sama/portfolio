import { ElementType, JSX, ReactNode } from "react";

type PaddingSize = "none" | "sm" | "md" | "lg";
type ShadowSize = "none" | "soft" | "medium" | "strong";

interface CardProps {
  children: ReactNode;
  as?: keyof JSX.IntrinsicElements | ElementType;
  className?: string;
  hoverEffect?: boolean;
  padding?: PaddingSize;
  shadow?: ShadowSize;
}

const paddingMap: Record<PaddingSize, string> = {
  none: "p-0",
  sm: "p-4",
  md: "p-6",
  lg: "p-8",
};

const shadowMap: Record<ShadowSize, string> = {
  none: "shadow-none dark:shadow-none",
  soft:
    "shadow-[0_12px_30px_rgba(15,23,42,0.08)] dark:shadow-[0_16px_35px_rgba(0,0,0,0.35)]",
  medium:
    "shadow-[0_18px_40px_rgba(15,23,42,0.12)] dark:shadow-[0_22px_50px_rgba(0,0,0,0.45)]",
  strong:
    "shadow-[0_25px_55px_rgba(15,23,42,0.18)] dark:shadow-[0_30px_65px_rgba(0,0,0,0.55)]",
};

const baseClasses =
  "relative rounded-3xl border border-black/5 bg-white/90 text-gray-900 backdrop-blur-sm transition-all duration-300 dark:border-white/10 dark:bg-gray-900/80 dark:text-gray-100";

const hoverClasses =
  "hover:-translate-y-1 hover:shadow-[0_30px_70px_rgba(15,23,42,0.18)] dark:hover:shadow-[0_35px_75px_rgba(0,0,0,0.65)]";

export default function Card({
  children,
  as: Tag = "div",
  className = "",
  hoverEffect,
  padding = "md",
  shadow = "none",
}: CardProps) {
  return (
    <Tag
      className={[
        baseClasses,
        shadowMap[shadow],
        paddingMap[padding],
        hoverEffect ? hoverClasses : "",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 rounded-3xl bg-linear-to-br from-primary/10 to-secondary/10 opacity-0 blur-3xl transition-opacity duration-300 mix-blend-normal dark:mix-blend-screen"
      />

      <div className="relative z-10">{children}</div>
    </Tag>
  );
}

