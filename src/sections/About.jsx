import { Check } from 'lucide-react';

export default function About() {
  const benefits = [
    "Comprehensive guide to all brewing variables",
    "Science-backed techniques and explanations",
    "Practical advice for home baristas",
    "Beautiful illustrations and brewing charts"
  ];

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image/Visual Side */}
            <div className="order-2 lg:order-1">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-amber-600 to-orange-700 dark:from-amber-700 dark:to-orange-800 shadow-2xl flex items-center justify-center">
                <div className="text-white text-center p-8">
                  <div className="text-6xl mb-4">☕</div>
                  <p className="text-xl font-semibold">Coffee Wisdom</p>
                </div>
              </div>
            </div>

            {/* Content Side */}
            <div className="order-1 lg:order-2">
              <div className="inline-block mb-4">
                <span className="bg-amber-100 dark:bg-amber-950 text-amber-800 dark:text-amber-400 px-4 py-2 rounded-full text-sm font-semibold">
                  About the Book
                </span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                A Complete Guide to Coffee Excellence
              </h2>

              <p className="text-lg text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                "The Intricacies of Coffee" is the definitive guide for anyone who wants to elevate their coffee game. Whether you're a home enthusiast or aspiring barista, this book demystifies every aspect of brewing exceptional coffee.
              </p>

              <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                From understanding origin characteristics and roast profiles to mastering brew methods and troubleshooting common issues, this comprehensive resource covers it all. You'll learn not just the "how," but the "why" behind each technique, empowering you to make informed decisions and craft your perfect cup.
              </p>

              {/* Benefits List */}
              <ul className="space-y-4 mb-8">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-amber-800 dark:bg-amber-700 rounded-full flex items-center justify-center mt-1">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-gray-700 dark:text-gray-300 text-lg">{benefit}</span>
                  </li>
                ))}
              </ul>

              <button className="bg-amber-800 dark:bg-amber-700 hover:bg-amber-900 dark:hover:bg-amber-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 shadow-lg hover:shadow-xl">
                Get Your Copy
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
