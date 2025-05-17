export const metadata = {
  title: "Jumbo Consulting",
  description: "We Hire. You Build.",
  icons: {
    icon: "/favicon-v2.ico",
    apple: "/apple-touch-icon.png",
    shortcut: "/favicon-192.png"
  },
  manifest: "/manifest.json"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}