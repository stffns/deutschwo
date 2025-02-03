import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import {ThemeProvider} from "next-themes";

const inter = Inter({
    variable: "--font-inter"
});

const spaceGrotesk = Space_Grotesk({
    variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
    title: "Deutsch, Wo?",
    description:
        "A community-driven platform for asking and answering programming questions. Get help, share knowledge, and collaborate with developers from around the world. Explore topics in web development, mobile app development, algorithms, data structures, and more.",
    icons: {
        icon: "/images/site-logo.svg",
    },
};

export default function RootLayout({children,}: Readonly<{children: React.ReactNode;}>)
{
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} antialiased`}
      >
      <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange>
          {children}
      </ThemeProvider>
      </body>
    </html>
  );
}
