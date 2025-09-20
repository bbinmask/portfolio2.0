import type { Metadata } from "next";
import { Cal_Sans, Funnel_Display, Poppins, Urbanist } from "next/font/google";
import "./globals.css";

const calSans = Cal_Sans({
  subsets: ["latin"],
  weight: "400",
});

const urbanist = Urbanist({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});
const funnel = Funnel_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Irfan's Portfolio",
  description: "Built by Next.js",
  icons: {
    icon: "./logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${funnel.className} ${calSans.className} ${urbanist.className} ${poppins.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
