import { Lightbulb } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { useTranslation } from '../translations';

export default function TravelTips({ tips }) {
  const { language } = useLanguage();
  const t = useTranslation(language);

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
        <Lightbulb className="text-amber-600 dark:text-amber-400" />
        {t.travelTips}
      </h3>

      <div className="grid md:grid-cols-2 gap-4">
        {tips.map((tip, index) => (
          <div
            key={index}
            className="bg-amber-50 dark:bg-amber-900/10 border border-amber-200 dark:border-amber-800 rounded-lg p-4"
          >
            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
              {tip.title}
            </h4>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              {tip.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
