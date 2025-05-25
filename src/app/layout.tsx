import type { Metadata } from "next";
import Image from "next/image";
import "./globals.css";
import Link from "next/link";

export const metadata: Metadata = {
  title: "The DEPT® weather planner",
  description:
    "The concept is simple: You will be creating a single-page website, titled 'DEPT® Weather Planner'. This is where your creativity gets to shine! You can use React with any setup you're comfortable with, Next.js, Vite, or anything else in the React ecosystem is fine. Just make sure it's React-based.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <header className="px-fluid-main absolute pt-5 lg:pt-[1.875rem] z-50">
          <Link href="/">
            <Image
              className="invert"
              aria-hidden
              src="/icons/dept-logo.svg"
              alt="DEPT® logo"
              width={88}
              height={25}
            />
          </Link>
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
