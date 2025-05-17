import RoleGrid from "./components/RoleGrid";

export const metadata = {
  title: "Jumbo Consulting",
  icons: {
    icon: "/favicon-v2.ico",
  },
};

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#0f1115] to-[#111827] text-white overflow-hidden">
      <div className="flex flex-col items-center justify-center px-4 py-8 min-h-screen">
        <img
          src="/logo.png"
          alt="Jumbo Consulting Logo"
          className="w-20 h-20 rounded-full shadow-lg mb-6"
        />
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">
          We Hire. You Build.
        </h1>
        <p className="text-center text-gray-300 mb-6 max-w-md">
          Quietly building bold teams for Seed to Series B startups.
        </p>
        <div className="flex gap-4 mb-8">
          <a
            href="mailto:support@jumbo.consulting"
            className="bg-white text-black px-4 py-2 rounded-lg font-semibold hover:scale-105 transition"
          >
            Email Us
          </a>
          <a
            href="https://calendly.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-black px-4 py-2 rounded-lg font-semibold hover:scale-105 transition"
          >
            Book a Call
          </a>
        </div>

        <h2 className="text-2xl font-semibold mb-4 text-center">
          Specialized In Hiring For Startups
        </h2>

        <RoleGrid />

        <footer className="text-sm text-gray-400 mt-10 text-center">
          &copy; 2025 Jumbo Consulting. All rights reserved.
        </footer>
      </div>
    </main>
  );
}