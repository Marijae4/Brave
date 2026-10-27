import { Link } from 'react-router';
import { Home, ArrowRight } from 'lucide-react';

export function NotFound() {
  return (
    <div className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-[#F0F0F0] dark:bg-[#111] pt-[72px] transition-colors duration-300">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(75,120,118,0.04)_1px,transparent_0)] bg-[length:24px_24px]" />

      {/* Animated Orb */}
      <div className="absolute w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,rgba(75,120,118,0.08)_0%,transparent_70%)] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-2xl mx-auto space-y-8 reveal">
          <div className="inline-block p-8">
            <h1 className="font-['Montserrat'] text-[10rem] md:text-[12rem] text-[#4B7876] font-black leading-none tracking-[-0.05em] opacity-20">
              404
            </h1>
          </div>

          <div className="space-y-4">
            <h2 className="font-['Montserrat'] text-[2.5rem] md:text-[3.5rem] font-extrabold text-[#181818] leading-[1.1] tracking-[-0.03em]">
              Page Not Found
            </h2>
            <p className="text-[1.1rem] text-[#666] max-w-md mx-auto leading-relaxed">
              Sorry, the page you're looking for doesn't exist. Let's get you back on track.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Link
              to="/"
              className="group inline-flex items-center justify-center gap-2 bg-[#4B7876] text-white px-8 py-4 rounded-full font-['Montserrat'] font-extrabold text-[0.82rem] tracking-[0.14em] uppercase transition-all duration-250 ease-[cubic-bezier(0.16,1,0.3,1)] hover:bg-[#181818] hover:-translate-y-[2px] shadow-[0_8px_40px_rgba(75,120,118,0.25)]"
            >
              <Home size={20} />
              Back to Home
            </Link>
            <Link
              to="/contact"
              className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white border-[1.5px] border-[rgba(24,24,24,0.15)] font-['Montserrat'] font-bold text-[0.82rem] tracking-[0.14em] uppercase text-[#181818] transition-all duration-250 ease-[cubic-bezier(0.16,1,0.3,1)] hover:border-[#4B7876] hover:text-[#4B7876] hover:-translate-y-[2px]"
            >
              Contact Support
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}