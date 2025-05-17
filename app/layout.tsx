// app/layout.tsx
export const metadata = {
  title: 'Jumbo Consulting',
  description: 'We Hire. You Build.',
  icons: {
    icon: '/favicon-192.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/manifest.json',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}