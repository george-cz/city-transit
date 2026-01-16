import Header from './sections/Header';
import Hero from './sections/Hero';
import Features from './sections/Features';
import About from './sections/About';
import Footer from './sections/Footer';
import ScrollToTop from './components/ScrollToTop';
import { ThemeProvider } from './contexts/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <Header />
        <Hero />
        <Features />
        <About />
        <Footer />
        <ScrollToTop />
      </div>
    </ThemeProvider>
  );
}

export default App;
