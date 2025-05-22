import type { Metadata } from "next";
import "./globals.css";

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
      <body>{children}</body>
    </html>
  );
}
