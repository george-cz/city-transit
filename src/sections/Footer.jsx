import { useLanguage } from '../contexts/LanguageContext';
import { useTranslation } from '../translations';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { language } = useLanguage();
  const t = useTranslation(language);

  return (
    <footer className="bg-gray-100 dark:bg-gray-950 border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            © {currentYear} {t.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}
