export const metadata = {
  title: "Jumbo Consulting",
  icons: {
    icon: "/favicon-v2.ico",
    apple: "/apple-touch-icon-v2.png",
    shortcut: "/favicon-192-v2.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}