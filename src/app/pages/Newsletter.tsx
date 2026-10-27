import { useEffect, useState } from 'react';
import { Check } from 'lucide-react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('up');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Show toast notification
    const toast = document.createElement('div');
    toast.className = 'toast show';
    toast.textContent = 'Welcome to Brave Recovery! Check your email for confirmation.';
    document.body.appendChild(toast);

    setTimeout(() => {
      toast.classList.remove('show');
      setTimeout(() => toast.remove(), 400);
    }, 3000);

    // Reset form
    setEmail('');
    setName('');
  };

  return (
    <div className="bg-[#F0F0F0] dark:bg-[#111] pt-[72px] transition-colors duration-300">
      {/* Hero */}
      <section className="min-h-[70vh] bg-[#181818] dark:bg-[#0a0a0a] flex flex-col justify-center px-6 lg:px-[52px] py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.03)_1px,transparent_0)] bg-[length:24px_24px]" />
        <div className="absolute w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,rgba(75,120,118,0.18)_0%,transparent_70%)] bottom-[-200px] right-[-100px] pointer-events-none" />

        <div className="max-w-[1200px] mx-auto relative z-10 reveal text-center">
          <div className="inline-flex items-center gap-3 text-[0.68rem] font-bold tracking-[0.2em] uppercase text-[#4B7876] mb-6 mx-auto">
            <span className="block w-8 h-[1.5px] bg-current" />
            Join Our Community
          </div>
          <h1 className="font-['Montserrat'] text-[clamp(3rem,6vw,5rem)] font-black leading-[1.05] tracking-[-0.04em] text-white mb-6 max-w-[900px] mx-auto">
            Start Your <em className="italic text-[#4B7876]">Free</em> Recovery Journey
          </h1>
          <p className="text-[1.1rem] text-[rgba(240,240,240,0.6)] leading-[1.8] max-w-[600px] mx-auto">
            Get exclusive access to expert tips, recovery programs, and personalized guidance—completely free.
          </p>
        </div>
      </section>

      {/* Main Newsletter Section */}
      <section className="py-[120px] px-6 lg:px-[52px]">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            {/* Left - Benefits */}
            <div className="reveal-left">
              <div className="inline-flex items-center gap-3 text-[0.68rem] font-bold tracking-[0.2em] uppercase text-[#4B7876] mb-6">
                <span className="block w-8 h-[1.5px] bg-current" />
                What You'll Get
              </div>
              <h2 className="font-['Montserrat'] text-[clamp(2rem,4vw,3.2rem)] font-extrabold leading-[1.05] tracking-[-0.03em] text-[#181818] mb-6">
                Expert Guidance,{' '}
                <em className="italic text-[#4B7876]">Delivered Weekly</em>
              </h2>
              <p className="text-[1.05rem] text-[#555] leading-[1.8] mb-10">
                Join over 5,000 people who receive our weekly newsletter packed with evidence-based recovery tips, exercise tutorials, and exclusive content.
              </p>

              <div className="space-y-5">
                {[
                  {
                    title: 'Weekly Recovery Tips',
                    desc: 'Evidence-based strategies to accelerate your healing and prevent future injuries.',
                  },
                  {
                    title: 'Exercise Tutorials',
                    desc: 'Step-by-step video guides for proper form and technique.',
                  },
                  {
                    title: 'Expert Q&A Sessions',
                    desc: 'Get your questions answered by certified physiotherapists.',
                  },
                  {
                    title: 'Early Access',
                    desc: 'Be the first to know about new programs, workshops, and resources.',
                  },
                ].map((benefit, idx) => (
                  <div key={idx} className="flex gap-4 items-start">
                    <div className="w-6 h-6 rounded-full bg-[rgba(75,120,118,0.1)] border-[1.5px] border-[rgba(75,120,118,0.25)] grid place-items-center flex-shrink-0 mt-1">
                      <Check size={14} className="text-[#4B7876]" strokeWidth={3} />
                    </div>
                    <div>
                      <h3 className="font-['Montserrat'] text-[1.05rem] font-bold text-[#181818] mb-1">
                        {benefit.title}
                      </h3>
                      <p className="text-[0.9rem] text-[#666] leading-[1.7]">{benefit.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right - Form */}
            <div className="reveal-right">
              <div className="bg-white rounded-[24px] p-10 lg:p-12 border border-[rgba(24,24,24,0.08)] shadow-[0_20px_80px_rgba(24,24,24,0.07)] relative overflow-hidden">
                <div className="absolute top-[-100px] right-[-100px] w-[250px] h-[250px] rounded-full bg-[radial-gradient(circle,rgba(75,120,118,0.07),transparent_70%)] pointer-events-none" />

                <div className="relative z-10">
                  <h3 className="font-['Montserrat'] text-[1.6rem] font-extrabold text-[#181818] mb-2">
                    Join Free Today
                  </h3>
                  <p className="text-[0.95rem] text-[#777] mb-8">
                    Start receiving expert recovery tips and exclusive content.
                  </p>

                  <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                      <div className="flex items-center bg-[#F0F0F0] rounded-[12px] border-[1.5px] border-[rgba(24,24,24,0.1)] overflow-hidden transition-all duration-250 focus-within:border-[#4B7876] focus-within:shadow-[0_0_0_3px_rgba(75,120,118,0.1)]">
                        <input
                          type="text"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="Your Name"
                          required
                          className="flex-1 px-5 py-4 bg-transparent border-none outline-none font-['Outfit'] text-[0.95rem] text-[#181818] placeholder:text-[#aaa]"
                        />
                      </div>
                    </div>

                    <div className="mb-4">
                      <div className="flex items-center bg-[#F0F0F0] rounded-[12px] border-[1.5px] border-[rgba(24,24,24,0.1)] overflow-hidden transition-all duration-250 focus-within:border-[#4B7876] focus-within:shadow-[0_0_0_3px_rgba(75,120,118,0.1)]">
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="Your Email"
                          required
                          className="flex-1 px-5 py-4 bg-transparent border-none outline-none font-['Outfit'] text-[0.95rem] text-[#181818] placeholder:text-[#aaa]"
                        />
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="w-full px-4 py-4 mt-2 bg-[#181818] text-white border-none rounded-[12px] font-['Montserrat'] font-extrabold text-[0.85rem] tracking-[0.14em] uppercase cursor-pointer transition-all duration-250 ease-[cubic-bezier(0.16,1,0.3,1)] hover:bg-[#4B7876] hover:-translate-y-[2px] hover:shadow-[0_12px_40px_rgba(75,120,118,0.25)]"
                    >
                      Get Started Free
                    </button>

                    <p className="text-[0.75rem] text-[#aaa] text-center mt-4">
                      No spam. Unsubscribe anytime. Your data is safe with us.
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-[#181818] py-[120px] px-6 lg:px-[52px]">
        <div className="max-w-[1200px] mx-auto">
          <div className="reveal text-center mb-16">
            <div className="inline-flex items-center gap-3 text-[0.68rem] font-bold tracking-[0.2em] uppercase text-[#4B7876] mb-6">
              <span className="block w-8 h-[1.5px] bg-current" />
              Member Success
            </div>
            <h2 className="font-['Montserrat'] text-[clamp(2.2rem,4vw,3.8rem)] font-extrabold leading-[1.05] tracking-[-0.03em] text-white mb-5">
              What Our <em className="italic text-[#4B7876]">Community</em> Says
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: 'Michael Torres',
                quote:
                  'The weekly tips have been invaluable. I\'ve learned so much about proper form and injury prevention.',
                result: 'Pain-free for 6 months',
              },
              {
                name: 'Sarah Johnson',
                quote:
                  'Finally, a newsletter that actually delivers useful content. The exercise tutorials are fantastic!',
                result: 'Back to running',
              },
              {
                name: 'David Park',
                quote:
                  'Expert advice delivered right to my inbox. The Q&A sessions alone are worth subscribing for.',
                result: 'Mobility restored',
              },
            ].map((testimonial, idx) => (
              <div
                key={idx}
                className="reveal bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.08)] rounded-[20px] p-8 hover:bg-[rgba(255,255,255,0.05)] hover:border-[rgba(75,120,118,0.25)] transition-all duration-300"
                style={{ transitionDelay: `${idx * 0.1}s` }}
              >
                <div className="text-[2rem] mb-4">💬</div>
                <p className="text-[0.95rem] text-[rgba(240,240,240,0.6)] leading-[1.7] mb-5 italic">
                  "{testimonial.quote}"
                </p>
                <div>
                  <div className="font-['Montserrat'] text-[0.95rem] font-bold text-white mb-1">
                    {testimonial.name}
                  </div>
                  <div className="text-[0.8rem] text-[#4B7876] font-semibold">
                    {testimonial.result}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-[120px] px-6 lg:px-[52px]">
        <div className="max-w-[900px] mx-auto">
          <div className="reveal text-center mb-16">
            <div className="inline-flex items-center gap-3 text-[0.68rem] font-bold tracking-[0.2em] uppercase text-[#4B7876] mb-6">
              <span className="block w-8 h-[1.5px] bg-current" />
              FAQ
            </div>
            <h2 className="font-['Montserrat'] text-[clamp(2.2rem,4vw,3.8rem)] font-extrabold leading-[1.05] tracking-[-0.03em] text-[#181818] mb-5">
              Common <em className="italic text-[#4B7876]">Questions</em>
            </h2>
          </div>

          <div className="space-y-4">
            {[
              {
                q: 'Is the newsletter really free?',
                a: 'Yes! Our newsletter is completely free with no hidden costs. We believe everyone deserves access to quality recovery information.',
              },
              {
                q: 'How often will I receive emails?',
                a: 'We send one comprehensive newsletter per week, typically on Mondays. You\'ll also receive occasional special announcements about new programs or workshops.',
              },
              {
                q: 'Can I unsubscribe anytime?',
                a: 'Absolutely. Every email includes an easy unsubscribe link at the bottom. No questions asked.',
              },
              {
                q: 'What topics do you cover?',
                a: 'We cover everything from injury prevention and pain management to strength training, mobility work, and post-surgical recovery.',
              },
            ].map((faq, idx) => (
              <div
                key={idx}
                className="reveal bg-white rounded-[16px] p-8 border border-[rgba(24,24,24,0.08)]"
                style={{ transitionDelay: `${idx * 0.05}s` }}
              >
                <h3 className="font-['Montserrat'] text-[1.1rem] font-bold text-[#181818] mb-3">
                  {faq.q}
                </h3>
                <p className="text-[0.95rem] text-[#666] leading-[1.75]">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}