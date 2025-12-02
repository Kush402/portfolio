import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kush Sharma | AI Engineer & Full Stack Developer",
  description: "Portfolio of Kush Sharma - Business Analyst Intern, AI Engineer, and Full Stack Developer specializing in AI/ML, automation, and data analytics.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://cdn.jsdelivr.net" />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
