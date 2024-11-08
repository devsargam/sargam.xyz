import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Script from 'next/script';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Sargam Poudel',
  description: 'A student and backend developer based on Bangalore, India',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-white dark:bg-zinc-900">
      <body className={inter.className}>
        <main className="bg-white dark:bg-zinc-900 min-h-screen">
          {children}
          <SpeedInsights />
          <Analytics />
        </main>
        <Script id="clarity-script" strategy="afterInteractive">
          {`
          (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
          })(window, document, "clarity", "script", "nczs4rjeot");
          `}
        </Script>
      </body>
    </html>
  );
}
