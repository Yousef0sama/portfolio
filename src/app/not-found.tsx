import Link from "next/link";

// Metadata for the 404 page
export const metadata = {
  title: "404 | Page Not Found",
};

/**
 * 404 Not Found Page
 * Displays a message when the user navigates to a non-existent route.
 */
export default function NotFound() {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen text-center px-4">

      {/* Error Code */}
      <h1 className="text-6xl font-bold text-primary mb-4">404</h1>

      {/* Error Title */}
      <h2 className="text-2xl font-semibold mb-2">Page Not Found</h2>

      {/* Error Description */}
      <p className="text-base text-gray-400 max-w-md mb-6">
        The page you&apos;re looking for doesn&apos;t exist or may have been moved.
      </p>

      {/* Back to Home Button */}
      <Link
        href="/"
        className="px-6 py-3 bg-primary text-white rounded-xl transition-all duration-300 hover:scale-105"
      >
        Back to Home
      </Link>
    </section>
  );
}
