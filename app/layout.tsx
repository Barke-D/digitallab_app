import type { Metadata } from "next";
import { Inter, Philosopher, Poppins } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const philosopher = Philosopher({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "SOS Digital Library",
  description:
    "This is a modern Digital website where you can access numerous educational books, including SAT's coding Books, Exam and work sheets, Art Books, And different fiction books for free online in one platform.",
  icons: {
    icon: "/assets/logo.svg",
  },
  other: {
    "theme-color": "#0d1117",
    "color-scheme": "dark only",
    "twitter:image": "https://i.ibb.co/XsLbNJt/Learning-At-home.jpg",
    "twitter:card": "summary_large_image",
    "og:url": "https://digital-app.vercel.app",
    "og:image": "https://i.ibb.co/XsLbNJt/Learning-At-home.jpg",
    "og:type": "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} ${poppins.className} ${philosopher.className} h-[200vh]`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
