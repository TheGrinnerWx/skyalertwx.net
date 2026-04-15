import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SkyAlert Weather Hub",
  description: "Professional weather information service and Discord hub.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
