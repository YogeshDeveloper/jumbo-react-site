import '../styles/globals.css';

export const metadata = {
  title: 'Jumbo Consulting',
  description: 'We Hire. You Build.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
