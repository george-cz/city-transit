import { Ticket, MapPin, DollarSign } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { useTranslation } from '../translations';

export default function TicketingInfo({ info }) {
  const { language } = useLanguage();
  const t = useTranslation(language);

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
        <Ticket className="text-amber-600 dark:text-amber-400" />
        {t.ticketingInfo}
      </h3>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Ticket Types */}
        {info.types && info.types.length > 0 && (
          <div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
              <Ticket size={18} className="text-amber-600 dark:text-amber-400" />
              {t.ticketTypes}
            </h4>
            <ul className="space-y-2">
              {info.types.map((type, index) => (
                <li
                  key={index}
                  className="flex items-start gap-2 text-gray-700 dark:text-gray-300"
                >
                  <span className="text-amber-600 dark:text-amber-400 mt-1">•</span>
                  {type}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Purchase Locations */}
        {info.purchaseLocations && info.purchaseLocations.length > 0 && (
          <div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
              <MapPin size={18} className="text-amber-600 dark:text-amber-400" />
              {t.whereToBuy}
            </h4>
            <ul className="space-y-2">
              {info.purchaseLocations.map((location, index) => (
                <li
                  key={index}
                  className="flex items-start gap-2 text-gray-700 dark:text-gray-300"
                >
                  <span className="text-amber-600 dark:text-amber-400 mt-1">•</span>
                  {location}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Typical Costs */}
      {info.tipicalCosts && (
        <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
          <h4 className="font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
            <DollarSign size={18} className="text-amber-600 dark:text-amber-400" />
            {t.typicalCosts}
          </h4>
          <div className="grid sm:grid-cols-3 gap-4">
            {info.tipicalCosts.singleRide && (
              <div className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-4">
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                  {t.singleRide}
                </p>
                <p className="text-lg font-semibold text-gray-900 dark:text-white">
                  {info.tipicalCosts.singleRide}
                </p>
              </div>
            )}
            {info.tipicalCosts.dayPass && (
              <div className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-4">
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                  {t.dayPass}
                </p>
                <p className="text-lg font-semibold text-gray-900 dark:text-white">
                  {info.tipicalCosts.dayPass}
                </p>
              </div>
            )}
            {info.tipicalCosts.weeklyPass && (
              <div className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-4">
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                  {t.weeklyPass}
                </p>
                <p className="text-lg font-semibold text-gray-900 dark:text-white">
                  {info.tipicalCosts.weeklyPass}
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
