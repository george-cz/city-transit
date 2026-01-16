import { Bus } from 'lucide-react';
import ThemeToggle from '../components/ThemeToggle';
import LanguageToggle from '../components/LanguageToggle';

export default function Header() {
  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 w-full z-50 bg-white/95 dark:bg-gray-950/95 backdrop-blur-sm shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a
            href="#home"
            onClick={scrollToTop}
            className="text-2xl font-bold text-amber-900 dark:text-amber-400 flex items-center gap-2"
          >
            <Bus size={28} />
            <span>CityTransit</span>
          </a>

          {/* Language and Theme Toggle */}
          <div className="flex items-center gap-3">
            <LanguageToggle />
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
}
