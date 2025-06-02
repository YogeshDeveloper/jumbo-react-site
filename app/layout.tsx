import './styles/globals.css';

export const metadata = {
  title: 'Jumbo Consulting',
  description: 'Quietly building bold teams for Seed to Series B startups.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-br from-blue-100 via-white to-purple-100 min-h-screen">
        {children}
      </body>
    </html>
  );
}