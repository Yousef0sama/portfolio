"use client";

// imports

// libs
import { ThemeProvider as NextThemesProvider } from "next-themes";

// interfaces
import { ReactNode } from "react";

/**
 * Theme provider component.
 *
 * Wraps the app with `NextThemesProvider` to manage dark/light theme.
 *
 * @param {Object} props - Component props.
 * @param {ReactNode} props.children - The children elements to render inside the provider.
 * @returns {React.JSX.Element} The theme provider wrapping the children.
 */
export default function ThemeProvider({ children }: { children: ReactNode }): React.JSX.Element {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="system"
      enableSystem={true}
      disableTransitionOnChange={true}
    >
      {children}
    </NextThemesProvider>
  );
}
