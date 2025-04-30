import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google'; // Import Montserrat
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from "@/components/ui/toaster";

// Configure Montserrat font
const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat', // Define CSS variable
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
      {/* Apply Montserrat font variable to the body */}
      <body className={`${montserrat.variable} font-sans antialiased`}>
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
