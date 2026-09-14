import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Zeekaz Web Design | Professional Web & Digital Services UK',
  description:
    'Zeekaz Web Design offers professional website design & development, logo design & branding, SEO, and social media marketing services in the UK.',
  keywords:
    'web design UK, website development, logo design, branding, SEO, social media marketing, Zeekaz',
  openGraph: {
    title: 'Zeekaz Web Design',
    description:
      'Professional web design, development, branding & digital marketing services in the UK.',
    url: 'https://zeekazwebdesign.co.uk',
    siteName: 'Zeekaz Web Design',
    locale: 'en_GB',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Space+Grotesk:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
