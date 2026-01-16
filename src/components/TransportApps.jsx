import { Smartphone, CheckCircle, ExternalLink } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { useTranslation } from '../translations';

export default function TransportApps({ apps }) {
  const { language } = useLanguage();
  const t = useTranslation(language);

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
        <Smartphone className="text-amber-600 dark:text-amber-400" />
        {t.transportApps}
      </h3>

      <div className="space-y-6">
        {apps.map((app, index) => (
          <div
            key={index}
            className="border border-gray-200 dark:border-gray-700 rounded-lg p-5 hover:shadow-md transition-shadow"
          >
            <div className="flex items-start justify-between mb-3">
              <div>
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white flex items-center gap-2">
                  {app.name}
                  {app.isOfficial && (
                    <span className="inline-flex items-center gap-1 px-2 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-xs font-medium rounded-full">
                      <CheckCircle size={14} />
                      {t.official}
                    </span>
                  )}
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                  {app.description}
                </p>
              </div>
            </div>

            {app.features && app.features.length > 0 && (
              <div className="mb-4">
                <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  {t.features}:
                </p>
                <div className="flex flex-wrap gap-2">
                  {app.features.map((feature, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-amber-50 dark:bg-amber-900/20 text-amber-700 dark:text-amber-300 text-sm rounded-full"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            )}

            <div className="flex flex-wrap gap-3 mb-3">
              {app.platforms?.ios && (
                <a
                  href={app.platforms.ios}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 px-4 py-2 bg-gray-900 dark:bg-gray-700 text-white text-sm font-medium rounded-lg hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors"
                >
                  iOS
                  <ExternalLink size={14} />
                </a>
              )}
              {app.platforms?.android && (
                <a
                  href={app.platforms.android}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 px-4 py-2 bg-green-600 dark:bg-green-700 text-white text-sm font-medium rounded-lg hover:bg-green-700 dark:hover:bg-green-600 transition-colors"
                >
                  Android
                  <ExternalLink size={14} />
                </a>
              )}
              {app.platforms?.web && (
                <a
                  href={app.platforms.web}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 px-4 py-2 bg-blue-600 dark:bg-blue-700 text-white text-sm font-medium rounded-lg hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors"
                >
                  Web
                  <ExternalLink size={14} />
                </a>
              )}
            </div>

            {app.costInfo && (
              <p className="text-sm text-gray-600 dark:text-gray-400 italic">
                {app.costInfo}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
