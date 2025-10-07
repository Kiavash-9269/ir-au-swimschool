import React, { useState, useEffect } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // کنترل مخفی/نمایش Navbar در اسکرول
  useEffect(() => {
    const controlNavbar = () => {
      if (window.scrollY > lastScrollY) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY]);

  return (
    <header
      className={`bg-white shadow-md w-full z-50 transition-transform duration-500 ${
        showNavbar ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* لوگو و نام مدرسه */}
          <div className="flex items-center gap-3">
            <img
              src="/logo.png.webp"
              alt="لوگوی مدرسه شنا ایران استرالیا"
              className="h-12 w-12 object-contain drop-shadow-sm"
            />
            <span className="text-lg font-bold text-slate-800">
              مدرسه شنا ایران استرالیا
            </span>
          </div>

          {/* منوی دسکتاپ */}
          <nav className="hidden md:flex items-center gap-6 font-medium text-slate-700 text-right">
            <a href="#home" className="hover:text-teal-600 transition">
              صفحه اصلی
            </a>
            <a href="#about" className="hover:text-teal-600 transition">
              درباره ما
            </a>
            <a href="#courses" className="hover:text-teal-600 transition">
              دوره‌ها
            </a>
            <a href="#coaches" className="hover:text-teal-600 transition">
              مربیان
            </a>
            <a href="#contact" className="hover:text-teal-600 transition">
              ارتباط با ما
            </a>
          </nav>

          {/* دکمه‌های ورود و ثبت‌نام (دسکتاپ) */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="#login"
              className="px-4 py-2 text-sm text-slate-700 border rounded-xl shadow-sm hover:bg-slate-50 hover:shadow-md transition"
            >
              ورود
            </a>
            <a
              href="#signup"
              className="px-4 py-2 text-sm font-medium bg-gradient-to-r from-teal-500 to-cyan-500 text-white rounded-xl shadow-sm hover:shadow-lg hover:scale-105 transition"
            >
              ثبت‌نام
            </a>
          </div>

          {/* دکمه همبرگری موبایل */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden inline-flex items-center justify-end p-2 rounded-md text-slate-700 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-teal-400"
          >
            {isOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* منوی موبایل */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg border-t animate-slide-down">
          <nav className="px-4 py-4 space-y-3 font-medium text-slate-700 text-right">
            <a href="#home" className="block hover:text-teal-600">
              صفحه اصلی
            </a>
            <a href="#about" className="block hover:text-teal-600">
              درباره ما
            </a>
            <a href="#courses" className="block hover:text-teal-600">
              دوره‌ها
            </a>
            <a href="#coaches" className="block hover:text-teal-600">
              مربیان
            </a>
            <a href="#contact" className="block hover:text-teal-600">
              ارتباط با ما
            </a>
            <div className="pt-3 border-t flex flex-col gap-2">
              <a
                href="#login"
                className="px-4 py-2 text-center border rounded-xl shadow-sm hover:bg-slate-50 transition"
              >
                ورود
              </a>
              <a
                href="#signup"
                className="px-4 py-2 text-center bg-gradient-to-r from-teal-500 to-cyan-500 text-white rounded-xl shadow-sm hover:shadow-md hover:scale-105 transition"
              >
                ثبت‌نام
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
