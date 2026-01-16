# Task 02: Base Layout & Component Structure

**Status**: [✓ COMPLETED]

**Dependencies**: Task 01

**Estimated Complexity**: Low

## Objective

Create the base application structure with section layout and prepare component placeholders.

## Requirements

1. Update `App.jsx` with main layout structure
2. Create placeholder components for each section
3. Implement smooth scroll navigation IDs
4. Set up basic color scheme and typography

## Steps

### 1. Create Section Placeholder Components

Create the following files in `src/sections/`:

**`src/sections/Header.jsx`**:
```jsx
export default function Header() {
  return (
    <header className="fixed top-0 w-full z-50 bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <p className="py-4">Header Placeholder</p>
      </div>
    </header>
  );
}
```

**`src/sections/Hero.jsx`**:
```jsx
export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
      <p>Hero Placeholder</p>
    </section>
  );
}
```

**`src/sections/Features.jsx`**:
```jsx
export default function Features() {
  return (
    <section id="features" className="min-h-screen flex items-center justify-center bg-white">
      <p>Features Placeholder</p>
    </section>
  );
}
```

**`src/sections/About.jsx`**:
```jsx
export default function About() {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center bg-gray-50">
      <p>About Placeholder</p>
    </section>
  );
}
```

**`src/sections/Footer.jsx`**:
```jsx
export default function Footer() {
  return (
    <footer id="contact" className="bg-gray-900 text-white py-12">
      <p>Footer Placeholder</p>
    </footer>
  );
}
```

### 2. Update App.jsx

Replace `src/App.jsx` content:
```jsx
import Header from './sections/Header';
import Hero from './sections/Hero';
import Features from './sections/Features';
import About from './sections/About';
import Footer from './sections/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Features />
      <About />
      <Footer />
    </div>
  );
}

export default App;
```

### 3. Test the Layout

Run `npm run dev` and verify:
- All sections render
- Smooth scrolling works (try adding `#features` to URL)
- No console errors

## Acceptance Criteria

- [ ] All section components are created
- [ ] App.jsx imports and renders all sections
- [ ] Each section has proper ID for navigation
- [ ] Basic background colors distinguish sections
- [ ] Smooth scrolling is working
- [ ] No errors in console

## Files to Create/Modify

- `src/App.jsx` (modified)
- `src/sections/Header.jsx` (created)
- `src/sections/Hero.jsx` (created)
- `src/sections/Features.jsx` (created)
- `src/sections/About.jsx` (created)
- `src/sections/Footer.jsx` (created)

## Completion

When complete:
1. Update status to `[✓ COMPLETED]`
2. Commit changes with message: "feat: add base layout and section structure"
3. Proceed to Task 03
