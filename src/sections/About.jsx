import { Check } from 'lucide-react';

export default function About() {
  const benefits = [
    "Innovative solutions for modern problems",
    "Expert team with years of experience",
    "Customer-first approach",
    "Cutting-edge technology stack"
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image/Visual Side */}
            <div className="order-2 lg:order-1">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-indigo-400 to-purple-500 shadow-2xl flex items-center justify-center">
                <div className="text-white text-center p-8">
                  <div className="text-6xl mb-4">🚀</div>
                  <p className="text-xl font-semibold">Image Placeholder</p>
                </div>
              </div>
            </div>

            {/* Content Side */}
            <div className="order-1 lg:order-2">
              <div className="inline-block mb-4">
                <span className="bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full text-sm font-semibold">
                  About Us
                </span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                We Build Digital Experiences
              </h2>

              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
              </p>

              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
              </p>

              {/* Benefits List */}
              <ul className="space-y-4 mb-8">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-indigo-600 rounded-full flex items-center justify-center mt-1">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-gray-700 text-lg">{benefit}</span>
                  </li>
                ))}
              </ul>

              <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 shadow-lg hover:shadow-xl">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
