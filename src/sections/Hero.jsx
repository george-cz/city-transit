import { ArrowRight, PlayCircle } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden"
      style={{
        backgroundImage: 'url(https://images.unsplash.com/photo-1447933601403-0c6688de566e?q=80&w=2661&auto=format&fit=crop)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Gradient overlay - darker in center, lighter at edges */}
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(circle, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.5) 40%, rgba(0,0,0,0.2) 100%)'
        }}
      ></div>
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-block mb-6">
            <span className="bg-white/90 dark:bg-gray-800/90 text-amber-900 dark:text-amber-400 px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
              ☕ A Journey Through Coffee Mastery
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-2xl">
            The Intricacies of
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-orange-200">
              {" "}Coffee{" "}
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-white/95 mb-10 max-w-3xl mx-auto leading-relaxed drop-shadow-lg">
            Discover the art and science behind brewing the perfect cup. From bean selection to extraction methods, explore every variable that transforms coffee into an exceptional experience.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="group bg-white dark:bg-gray-900 hover:bg-amber-50 dark:hover:bg-gray-800 text-amber-900 dark:text-amber-400 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 flex items-center gap-2 shadow-2xl hover:shadow-3xl hover:scale-105 transform">
              Order the Book
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </button>
            <button className="group bg-amber-900/80 dark:bg-amber-700/80 hover:bg-amber-800 dark:hover:bg-amber-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 flex items-center gap-2 border-2 border-white/30 backdrop-blur-sm shadow-2xl hover:scale-105 transform">
              <PlayCircle size={20} />
              Preview Chapters
            </button>
          </div>

          {/* Stats or Social Proof */}
          <div className="mt-16 grid grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2 drop-shadow-lg">12</div>
              <div className="text-white/90 text-sm md:text-base">Chapters</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2 drop-shadow-lg">100+</div>
              <div className="text-white/90 text-sm md:text-base">Brewing Techniques</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2 drop-shadow-lg">30+</div>
              <div className="text-white/90 text-sm md:text-base">Coffee Origins</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
