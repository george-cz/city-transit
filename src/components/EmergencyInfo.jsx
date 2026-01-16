import { Phone, Globe } from 'lucide-react';

export default function EmergencyInfo({ info }) {
  return (
    <div className="bg-red-50 dark:bg-red-900/10 border-2 border-red-200 dark:border-red-800 rounded-lg p-6">
      <h3 className="text-2xl font-bold text-red-900 dark:text-red-400 mb-4">
        Emergency Contact
      </h3>

      <div className="space-y-3">
        {info.transportHotline && (
          <div className="flex items-center gap-3">
            <Phone className="text-red-600 dark:text-red-400" size={20} />
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Transport Hotline
              </p>
              <a
                href={`tel:${info.transportHotline}`}
                className="text-lg font-semibold text-red-700 dark:text-red-400 hover:underline"
              >
                {info.transportHotline}
              </a>
            </div>
          </div>
        )}

        {info.website && (
          <div className="flex items-center gap-3">
            <Globe className="text-red-600 dark:text-red-400" size={20} />
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Official Website
              </p>
              <a
                href={info.website}
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg font-semibold text-red-700 dark:text-red-400 hover:underline"
              >
                {info.website}
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
