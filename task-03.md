# Task 03: Header/Navigation Component

**Status**: [✓ COMPLETED]

**Dependencies**: Task 02

**Estimated Complexity**: Medium

## Objective

Build a modern, responsive navigation header with smooth scrolling to sections and mobile menu.

## Requirements

1. Create a sticky header with logo and navigation
2. Implement smooth scroll to anchor links
3. Add mobile hamburger menu
4. Make navigation highlight active section (optional enhancement)
5. Use modern, clean design

## Steps

### 1. Update Header Component

Replace `src/sections/Header.jsx`:

```jsx
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Features', href: '#features' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => scrollToSection(e, '#home')}
            className="text-2xl font-bold text-indigo-600"
          >
            ModernSite
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className="text-gray-700 hover:text-indigo-600 transition-colors duration-200 font-medium"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700 hover:text-indigo-600 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-gray-200">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className="block py-2 text-gray-700 hover:text-indigo-600 transition-colors duration-200 font-medium"
              >
                {link.name}
              </a>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}
```

### 2. Update Hero Section Padding

Since we now have a fixed header, update `src/sections/Hero.jsx` to add top padding:

```jsx
export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 pt-16">
      <p>Hero Placeholder</p>
    </section>
  );
}
```

### 3. Test the Navigation

- Click all navigation links
- Test on mobile viewport (resize browser or use dev tools)
- Verify smooth scrolling
- Check mobile menu opens/closes
- Verify header stays at top when scrolling

## Acceptance Criteria

- [ ] Header is fixed at top of page
- [ ] Logo and navigation links are visible
- [ ] Smooth scrolling works for all links
- [ ] Mobile menu works (hamburger icon toggles menu)
- [ ] Navigation is responsive (horizontal on desktop, vertical on mobile)
- [ ] Clean, modern design matches overall aesthetic
- [ ] Menu closes after clicking a link on mobile

## Files to Modify

- `src/sections/Header.jsx` (modified)
- `src/sections/Hero.jsx` (modified - add pt-16)

## Completion

When complete:
1. Update status to `[✓ COMPLETED]`
2. Commit changes with message: "feat: implement responsive navigation header"
3. Proceed to Task 04
