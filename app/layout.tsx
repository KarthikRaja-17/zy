import type { Metadata } from 'next';
import { Syne, DM_Sans } from 'next/font/google';
import './globals.css';
import ThemeProvider from '@/components/ThemeProvider/ThemeProvider';

const syne = Syne({ subsets: ['latin'], weight: ['700', '800'], variable: '--font-syne' });
const dmSans = DM_Sans({ subsets: ['latin'], weight: ['300', '400', '500'], variable: '--font-dm' });

export const metadata: Metadata = {
  title: 'Zyvora - IT Services', description: 'Next-gen AI solutions', icons: {
    icon: '/zyvora-header.png', // The main favicon (usually 32x32)
    shortcut: '/zyvora-header.png',
    apple: '/zyvora-header.png', // For iOS home screen bookmarks
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${syne.variable} ${dmSans.variable}`}>
      <body>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
