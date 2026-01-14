import { Inter } from "next/font/google"; // Using a nice font like Inter or similar if available, else default
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  metadataBase: new URL('https://ayushsrivastava.dev'),
  title: {
    default: "Ayush Srivastava | Full Stack Developer",
    template: "%s | Ayush Srivastava",
  },
  description: "Portfolio of Ayush Srivastava, a Full Stack Developer specializing in MERN stack, Next.js, and modern web technologies. Viewing projects, works, and technical articles.",
  keywords: [
    "Ayush Srivastava",
    "Full Stack Developer",
    "Software Engineer",
    "Web Developer",
    "MERN Stack",
    "Next.js",
    "React",
    "JavaScript",
    "Portfolio",
    "Frontend Developer",
    "Backend Developer"
  ],
  authors: [{ name: "Ayush Srivastava", url: "https://ayushsrivastava.dev" }],
  creator: "Ayush Srivastava",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ayushsrivastava.dev",
    title: "Ayush Srivastava | Full Stack Developer",
    description: "Portfolio of Ayush Srivastava, a Full Stack Developer specializing in MERN stack, Next.js, and modern web technologies.",
    siteName: "Ayush Srivastava Portfolio",
    images: [
      {
        url: "/profile.jpg", // Using profile pic as OG image for now, or could use a screenshot if available
        width: 1200,
        height: 630,
        alt: "Ayush Srivastava",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ayush Srivastava | Full Stack Developer",
    description: "Portfolio of Ayush Srivastava, a Full Stack Developer specializing in MERN stack.",
    images: ["/profile.jpg"],
    creator: "@CodeWithAyush", // Placeholder or from data if known, user didn't specify twitter handle so generic text or omit. I'll omit creator handle or put name.
  },
  icons: {
    icon: '/icon.svg',
    shortcut: '/icon.svg',
    apple: '/icon.svg',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} min-h-screen bg-[var(--background)] text-[var(--foreground)] transition-colors duration-300 relative selection:bg-cyan-500/30`}>
        {/* Background Blobs */}
        <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-purple-500/30 rounded-full blur-[100px] opacity-50 dark:opacity-20 animate-pulse"></div>
          <div className="absolute top-[20%] right-[-10%] w-96 h-96 bg-cyan-500/30 rounded-full blur-[100px] opacity-50 dark:opacity-20 animate-pulse delay-1000"></div>
          <div className="absolute bottom-[-10%] left-[20%] w-96 h-96 bg-blue-500/30 rounded-full blur-[100px] opacity-50 dark:opacity-20 animate-pulse delay-2000"></div>
        </div>

        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow container mx-auto px-6 py-8">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
