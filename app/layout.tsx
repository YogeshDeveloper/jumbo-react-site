// app/layout.tsx
import './globals.css'; // Only if you have global styles

export const metadata = {
  title: 'Jumbo Consulting',
  description: 'We hire. You build.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}