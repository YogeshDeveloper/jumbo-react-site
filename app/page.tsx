// app/page.tsx
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  const roles = [
    'CTO',
    'ML Engineer',
    'Frontend Developer',
    'Backend Developer',
    'SDR',
    'Account Executive',
    'Webflow Developer',
    'Growth Marketer',
  ];

  return (
    <main className="min-h-screen bg-white text-gray-900 flex flex-col items-center justify-center px-4 py-12 space-y-10">
      <Image src="/logo.png" alt="Jumbo Consulting Logo" width={160} height={160} />
      <h1 className="text-4xl sm:text-5xl font-extrabold text-center">We Hire. You Build.</h1>
      <p className="text-lg text-center max-w-xl">
        Quietly building bold teams for Seed to Series B startups.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <Link
          href="mailto:yogesh@jumbo.consulting"
          className="bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition"
        >
          Email Us
        </Link>
        <Link
          href="https://calendly.com/yogesh-jumbo/30min"
          className="border border-black px-6 py-3 rounded-full hover:bg-gray-100 transition"
        >
          Book a Call
        </Link>
      </div>
      <section className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl mt-8">
        {roles.map((role) => (
          <div
            key={role}
            className="border border-gray-200 px-4 py-2 text-center rounded-lg shadow-sm hover:shadow-md transition"
          >
            {role}
          </div>
        ))}
      </section>
      <footer className="mt-12 text-sm text-gray-500 text-center">
        © {new Date().getFullYear()} Jumbo Consulting. All rights reserved.
      </footer>
    </main>
  );
}