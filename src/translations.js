export const translations = {
  en: {
    // Header
    appName: 'CityTransit',

    // Hero/Search Section
    title: 'Public Transport Guide',
    subtitle: 'Find your way around any city with ease',
    searchPlaceholder: 'Enter city name...',
    searchButton: 'Search',
    searching: 'Searching...',
    or: 'or',
    useLocation: 'Use My Location',

    // Errors
    errorCityNotFound: 'City not found or service unavailable',
    errorLocation: 'Unable to retrieve your location',
    errorGeolocation: 'Geolocation is not supported by your browser',

    // City Info
    currency: 'Currency',
    transport: 'Transport',

    // Transport Apps Section
    transportApps: 'Transport Apps',
    official: 'Official',
    features: 'Features',

    // Ticketing Info Section
    ticketingInfo: 'Ticketing Information',
    ticketTypes: 'Ticket Types',
    whereToBuy: 'Where to Buy',
    typicalCosts: 'Typical Costs',
    singleRide: 'Single Ride',
    dayPass: 'Day Pass',
    weeklyPass: 'Weekly Pass',

    // Travel Tips Section
    travelTips: 'Travel Tips',

    // Emergency Info Section
    emergencyContact: 'Emergency Contact',
    transportHotline: 'Transport Hotline',
    officialWebsite: 'Official Website',

    // Footer
    copyright: 'CityTransit. All rights reserved.',
  },
  cs: {
    // Header
    appName: 'CityTransit',

    // Hero/Search Section
    title: 'Průvodce městskou dopravou',
    subtitle: 'Snadno se orientujte v každém městě',
    searchPlaceholder: 'Zadejte název města...',
    searchButton: 'Hledat',
    searching: 'Vyhledávám...',
    or: 'nebo',
    useLocation: 'Použít moji polohu',

    // Errors
    errorCityNotFound: 'Město nenalezeno nebo služba není dostupná',
    errorLocation: 'Nepodařilo se získat vaši polohu',
    errorGeolocation: 'Váš prohlížeč nepodporuje geolokaci',

    // City Info
    currency: 'Měna',
    transport: 'Doprava',

    // Transport Apps Section
    transportApps: 'Aplikace pro dopravu',
    official: 'Oficiální',
    features: 'Funkce',

    // Ticketing Info Section
    ticketingInfo: 'Informace o jízdenkách',
    ticketTypes: 'Typy jízdenek',
    whereToBuy: 'Kde koupit',
    typicalCosts: 'Typické ceny',
    singleRide: 'Jednotlivá jízda',
    dayPass: 'Denní jízdenka',
    weeklyPass: 'Týdenní jízdenka',

    // Travel Tips Section
    travelTips: 'Tipy pro cestování',

    // Emergency Info Section
    emergencyContact: 'Nouzový kontakt',
    transportHotline: 'Dopravní linka',
    officialWebsite: 'Oficiální web',

    // Footer
    copyright: 'CityTransit. Všechna práva vyhrazena.',
  }
};

export function useTranslation(language) {
  return translations[language] || translations.en;
}
