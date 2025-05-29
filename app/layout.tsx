import './styles/globals.css';

export const metadata = {
  title: 'Jumbo Consulting',
  description: 'Quietly building bold teams for Seed to Series B startups.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
