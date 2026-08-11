import type { Metadata } from "next";
import { Archivo, Space_Grotesk } from "next/font/google";
import "./globals.css";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Widhi Damar Anandito — Portfolio",
    template: "%s — Widhi Damar Anandito",
  },
  description:
    "Portfolio of Widhi Damar Anandito — turning real problems into working solutions across web development, data, and the systems that tie them together.",
  keywords: [
    "Widhi Damar Anandito",
    "Portfolio",
    "Information Systems",
    "Web Developer",
    "Laravel Developer",
    "Data Analyst",
    "Full-stack Developer",
  ],
  authors: [{ name: "Widhi Damar Anandito" }],
  openGraph: {
    title: "Widhi Damar Anandito — Portfolio",
    description:
      "Turning real problems into working solutions across web development, data, and the systems that tie them together.",
    type: "website",
  },
};

const themeScript = `
(function () {
  try {
    var stored = localStorage.getItem('theme');
    var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    var theme = stored || (prefersDark ? 'dark' : 'light');
    if (theme === 'dark') document.documentElement.classList.add('dark');
    document.documentElement.style.colorScheme = theme;
  } catch (e) {}
})();
`;

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${archivo.variable} ${spaceGrotesk.variable} h-full antialiased`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
