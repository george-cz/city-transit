import Header from './sections/Header';
import Hero from './sections/Hero';
import Features from './sections/Features';
import About from './sections/About';
import Footer from './sections/Footer';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Features />
      <About />
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;
