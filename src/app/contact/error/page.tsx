import Link from "next/link";

export const metadata = {
  title: "message failed | Yousef Osama - Frontend Developer",

  openGraph: {
    title: "message failed | Yousef Osama - Frontend Developer",
    url: `${process.env.NEXT_PUBLIC_SITE_URL}/contact/error`,
  },

  twitter: {
    title: "message failed | Yousef Osama",
    },

  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_SITE_URL}/contact/error`,
  },
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  }
};


export default function Page() {
  return (
    <main className="flex-1 container mx-auto px-4 py-12 sm:px-6 sm:py-20 min-h-[calc(100vh-8rem)]">
      <section className="flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-6xl font-bold text-red-600 mb-4">Oops!</h1>
        <h2 className="text-2xl font-semibold mb-2">Something went wrong</h2>
        <p className="text-base text-gray-400 max-w-md mb-6">
          There was an error sending your message. Please try again later or contact me directly at <a href="mailto:devbyyousef@gmail.com" className="underline">devbyyousef@gmail.com</a>.
        </p>
        <Link
          href="/contact"
          className="px-6 py-3 bg-primary text-white rounded-xl transition-all duration-300 hover:scale-105"
        >
          Go Back to Contact Form
        </Link>
      </section>
    </main>
  );
}
