import React, { useState } from 'react';
import { useXP } from "../XPContext"; 
import toast from 'react-hot-toast';

const ConnectWithMe = () => {
  const { earnXP } = useXP(); 
  const [showAchievement, setShowAchievement] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleLinkClick = (e, link, xpAmount) => {
    e.preventDefault();
    earnXP(xpAmount);
    toast.success(`You've earned ${xpAmount} XP!`);
    window.open(link, '_blank');
  };

  const handleCopy = () => {
    navigator.clipboard.writeText("sekarinesh14@gmail.com");
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 animate__animated animate__fadeIn">
            Connect with Me
            <div className="inline-block ml-2 px-3 py-1 text-sm bg-blue-100 text-blue-600 rounded-full">
              Let's Build Together
            </div>
          </h2>
        </div>

        {/* Social Links */}
        <div className="space-y-8">
          <h3 className="text-xl font-semibold text-neutral-900 mb-6">Connect on These Platforms</h3>
          <div className="social-links grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* GitHub */}
            <div className="github">
              <a
                onClick={(e) => handleLinkClick(e, "https://github.com/Trident14", 50)}
                className="social-link block bg-white p-6 rounded-xl shadow-lg transform transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-center justify-between space-x-4">
                  <div className="w-12 h-12 bg-neutral-100 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-neutral-700" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  </div>
                  <div className="primary flex-grow">
                    <h4 className="text-lg font-medium text-neutral-900">GitHub</h4>
                    <p className="text-sm text-neutral-600">View my open source projects</p>
                  </div>
                  <div className="px-3 py-1 text-sm bg-gray-100 text-gray-600 rounded-full">+50 XP</div>
                </div>
              </a>
            </div>

            {/* LinkedIn */}
            <div className="linkedin">
              <a
                onClick={(e) => handleLinkClick(e, "https://www.linkedin.com/in/inesh-sekar-4625651a5/",150)}
                className="social-link block bg-white p-6 rounded-xl shadow-lg transform transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-center justify-between space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-blue-700" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </div>
                  <div className="primary flex-grow">
                    <h4 className="text-lg font-medium text-neutral-900">LinkedIn</h4>
                    <p className="text-sm text-neutral-600">Connect with me professionally</p>
                  </div>
                  <div className="px-3 py-1 text-sm bg-blue-100 text-blue-600 rounded-full">+150 XP</div>
                </div>
              </a>
            </div>

            {/* LeetCode */}
            <div className="leetcode">
              <a
                onClick={(e) => handleLinkClick(e, "https://leetcode.com/u/Velociraptor10/",100)}
                className="social-link block bg-white p-6 rounded-xl shadow-lg transform transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-center justify-between space-x-4">
                  <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-yellow-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.775 0h-17.55C1.275 0 0 1.235 0 2.75v18.5C0 22.765 1.275 24 2.75 24h17.5c1.475 0 2.75-1.235 2.75-2.75v-18.5C23.525 1.235 22.25 0 20.775 0zm-5.539 17.264c-.047-.13-.127-.245-.227-.346-.383-.392-.767-.623-1.231-.82-.534-.222-.968-.551-1.285-.982-.245-.268-.366-.553-.366-.854 0-.277.145-.549.362-.818.364-.416.816-.75 1.394-.993.346-.177.725-.358 1.065-.54.487-.248.915-.538 1.289-.826.488-.318.963-.702 1.422-1.153.554-.567.987-1.18 1.276-1.861-.197-.71-.512-1.367-.935-1.941-.425-.573-.941-1.06-1.542-1.47-.742-.565-1.561-.99-2.48-1.287-.474-.171-.966-.26-1.45-.285.321-.385.582-.798.783-1.23-.544.226-1.047.558-1.563.963-1.016.715-2.268 1.16-3.529 1.252-.861.058-1.699-.61-1.774-1.482-.089-.904.61-1.75 1.48-1.75.692 0 1.317-.426 1.573-1.072-1.621-.016-3.235.546-4.575 1.464-.736.551-1.373 1.226-1.884 1.992.748-.004 1.516-.009 2.274.031.562.157 1.15-.221 1.646-.609-.493 1.42-.568 3.381.448 4.515 1.083 1.226 2.492 1.91 3.98 1.798 1.03-.131 2.014-.596 2.804-1.277-.027-.001-.058-.003-.09-.004z" />
                    </svg>
                  </div>
                  <div className="primary flex-grow">
                    <h4 className="text-lg font-medium text-neutral-900">LeetCode</h4>
                    <p className="text-sm text-neutral-600">Solve problems with me</p>
                  </div>
                  <div className="px-3 py-1 text-sm bg-yellow-100 text-yellow-600 rounded-full">+100 XP</div>
                </div>
              </a>
            </div>

            {/* Email */}
            <div className="email">
              <a
                onClick={(e) => handleLinkClick(e, "mailto:sekarinesh14@gmail.com",200)}
                className="social-link block bg-white p-6 rounded-xl shadow-lg transform transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-center justify-between space-x-4">
                  <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-yellow-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4 13.5H8v-1h8v1zm0-3H8v-1h8v1zm0-3H8V8h8v1z" />
                    </svg>
                  </div>
                  <div className="flex-grow">
                    <h4 className="text-lg font-medium text-neutral-900">Email</h4>
                    <p className="text-sm text-neutral-600">
                      {copied ? 'Email copied!' : 'Click to send an email'}
                    </p>
                  </div>
                  <div className="px-3 py-1 text-sm bg-red-100 text-red-600 rounded-full">+200 XP</div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConnectWithMe;
