"use client";

// imports

// components
import Link from "next/link";

interface CTAProps {
  children: React.ReactNode;
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
  download?: boolean;
}

/**
 * Reusable CTA component that can render:
 * - A button
 * - An internal Next.js Link
 * - An external anchor link
 *
 * Supports variants, sizes, disabled state, and auto-generated aria-labels.
 *
 * @param {CTAProps} props - CTA configuration and children
 * @returns {React.JSX.Element} The rendered CTA element
 */
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
  download = false,
}: CTAProps): React.JSX.Element {

  // Base styling applied to all CTA types
  const baseStyles =
    "inline-flex items-center justify-center font-medium rounded-xl transition-all duration-300 hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100";

  // Style based on variant (primary / secondary)
  const variantStyles = {
    primary:
      "bg-primary text-white hover:bg-secondary focus:ring-primary",
    secondary:
      "border-2 border-primary text-primary hover:bg-primary hover:text-white focus:ring-primary",
  };

  // Size presets
  const sizeStyles = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  // Merge all styles
  const combinedClassName = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

  /**
   * Generate aria-label if not provided:
   * - If children is text → use it
   * - Otherwise → skip
   * @returns {string | undefined}
   */
  const getAriaLabel = () => {
    if (ariaLabel) return ariaLabel;
    if (typeof children === "string") return children;
    return undefined;
  };

  const ariaLabelValue = getAriaLabel();

  /**
   * Case 1: Button (if onClick exists OR no href provided)
   */
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

  /**
   * Case 2: External link (<a> tag)
   */
  if (external) {
    // Enhance aria-label for external links
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

  /**
   * Case 3: Internal link (Next.js <Link>)
   */
  return (
    <Link
      href={href}
      className={combinedClassName}
      aria-label={ariaLabelValue}
      title={title}
      download={download}
    >
      {children}
    </Link>
  );
}
