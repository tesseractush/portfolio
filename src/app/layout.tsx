import type { Metadata } from 'next';
import { IBM_Plex_Sans } from 'next/font/google'; // Import IBM Plex Sans
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from "@/components/ui/toaster";

// Configure IBM Plex Sans font
const ibmPlexSans = IBM_Plex_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'], // Include necessary weights
  variable: '--font-ibm-plex-sans', // Define CSS variable
  display: 'swap', // Improve font loading performance
});

export const metadata: Metadata = {
  title: 'Mrityunjay Srivastava - Full Stack & AI Engineer',
  description: 'Portfolio of Mrityunjay Srivastava, showcasing projects and experience in Full Stack Development and AI Automation.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      {/* Apply IBM Plex Sans font variable to the body */}
      <body className={`${ibmPlexSans.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
