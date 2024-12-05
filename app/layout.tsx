import type { Metadata, Viewport } from "next";
// import localFont from "next/font/local";
import "./globals.css";

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

export const metadata: Metadata = {
  title: "Raha - Store at your door",
  description:
    "Say goodbye to the hassle of traditional shopping. With Raha, enjoy the convenience of having high-quality foodstuffs and groceries delivered to your home at your preferred time. Spend more time enjoying your meals and less time worrying about shopping.",
  metadataBase: new URL("https://voucha.useraha.com/"),
  openGraph: {
    images: [
      {
        url: "https://res.cloudinary.com/dpesanzkk/image/upload/v1728180134/RAHA-LOGO_dvqmd5.webp",
      },
    ],
  },
};

export const viewport: Viewport = {
  themeColor: "#002400",
  initialScale: 1,
  width: "device-width",
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      // className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
