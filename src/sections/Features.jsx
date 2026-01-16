import { Coffee, Thermometer, Scale, Clock, Droplets, Bean } from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: <Coffee className="w-8 h-8" />,
      title: "Bean Selection",
      description: "Explore the world of coffee origins, processing methods, and how to identify quality beans that match your taste preferences."
    },
    {
      icon: <Thermometer className="w-8 h-8" />,
      title: "Temperature Control",
      description: "Master the critical role of water temperature in extraction, from cold brew to espresso, and everything in between."
    },
    {
      icon: <Scale className="w-8 h-8" />,
      title: "Precise Ratios",
      description: "Learn the science behind coffee-to-water ratios and how small adjustments can dramatically change your cup's character."
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Extraction Time",
      description: "Understand the delicate balance of brewing time and how it affects the flavors, body, and clarity of your coffee."
    },
    {
      icon: <Droplets className="w-8 h-8" />,
      title: "Water Quality",
      description: "Discover why water composition matters and how mineral content impacts flavor extraction and overall taste profile."
    },
    {
      icon: <Bean className="w-8 h-8" />,
      title: "Grind Size",
      description: "Uncover the relationship between particle size, surface area, and extraction, and how to dial in the perfect grind."
    }
  ];

  return (
    <section id="features" className="py-20 bg-white dark:bg-gray-950">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            What You'll Discover
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Dive deep into the essential variables that transform ordinary coffee into an extraordinary brew. Each topic is explored with practical techniques you can apply immediately.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-white dark:bg-gray-900 p-8 rounded-xl border-2 border-gray-100 dark:border-gray-800 hover:border-amber-200 dark:hover:border-amber-700 hover:shadow-xl transition-all duration-300"
            >
              <div className="w-16 h-16 bg-amber-100 dark:bg-amber-950 rounded-lg flex items-center justify-center text-amber-800 dark:text-amber-400 mb-4 group-hover:bg-amber-800 group-hover:text-white transition-colors duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
