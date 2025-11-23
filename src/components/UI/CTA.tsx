"use client";

import Link from "next/link";
import { ReactNode } from "react";

interface CTAProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  type?: "submit" | "button" | "reset";
  variant?: "primary" | "secondary";
  size?: "sm" | "md" | "lg";
  className?: string;
  external?: boolean;
  disabled?: boolean;
  ariaLabel?: string;
  title?: string;
}

export default function CTA({
  children,
  href,
  onClick,
  type = "button",
  variant = "primary",
  size = "md",
  className = "",
  external = false,
  disabled = false,
  ariaLabel,
  title,
}: CTAProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-medium rounded-xl transition-all duration-300 hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100";

  const variantStyles = {
    primary:
      "bg-primary text-white hover:bg-secondary focus:ring-primary",
    secondary:
      "border-2 border-primary text-primary hover:bg-primary hover:text-white focus:ring-primary",
  };

  const sizeStyles = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const combinedClassName = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

  // Get aria-label from prop or generate from children text
  const getAriaLabel = () => {
    if (ariaLabel) return ariaLabel;
    if (typeof children === "string") return children;
    return undefined;
  };

  const ariaLabelValue = getAriaLabel();

  // If it's a button
  if (onClick || !href) {
    return (
      <button
        onClick={onClick}
        disabled={disabled}
        className={combinedClassName}
        type={type}
        aria-label={ariaLabelValue}
        aria-disabled={disabled}
        title={title}
      >
        {children}
      </button>
    );
  }

  // If it's an external link
  if (external) {
    const externalAriaLabel =
      ariaLabelValue ||
      (typeof children === "string"
        ? `${children} (opens in new tab)`
        : "External link (opens in new tab)");

    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={combinedClassName}
        aria-label={externalAriaLabel}
        title={title}
      >
        {children}
      </a>
    );
  }

  // If it's an internal link
  return (
    <Link
      href={href}
      className={combinedClassName}
      aria-label={ariaLabelValue}
      title={title}
    >
      {children}
    </Link>
  );
}

