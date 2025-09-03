import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const metropolis = localFont({
  src: [
    {
      path: "../../public/fonts/metropolis/Metropolis-Thin.otf",
      weight: "100",
      style: "normal",
    },
    {
      path: "../../public/fonts/metropolis/Metropolis-Light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/metropolis/Metropolis-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/metropolis/Metropolis-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/metropolis/Metropolis-SemiBold.otf",
      weight: "600",
      style: "normal",
    },
  ],
  variable: "--font-metropolis",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Cirrus AI Voice",
  description: "Turn Every Call into a Quality Opportunity",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` ${metropolis.variable}`}>{children}</body>
    </html>
  );
}
