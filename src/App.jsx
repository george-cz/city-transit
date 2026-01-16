import { useState } from 'react';
import { Search, MapPin, Loader2 } from 'lucide-react';
import Header from './sections/Header';
import Footer from './sections/Footer';
import ScrollToTop from './components/ScrollToTop';
import { ThemeProvider } from './contexts/ThemeContext';
import TransportApps from './components/TransportApps';
import TicketingInfo from './components/TicketingInfo';
import TravelTips from './components/TravelTips';
import EmergencyInfo from './components/EmergencyInfo';

function App() {
  const [city, setCity] = useState('');
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!city.trim()) return;

    setLoading(true);
    setError(null);

    try {
      const apiUrl = import.meta.env.VITE_API_URL;
      const response = await fetch(`${apiUrl}?city=${encodeURIComponent(city)}`);

      if (!response.ok) {
        throw new Error('City not found or service unavailable');
      }

      const result = await response.json();
      setData(result);
    } catch (err) {
      setError(err.message);
      setData(null);
    } finally {
      setLoading(false);
    }
  };

  const handleUseLocation = () => {
    if (!navigator.geolocation) {
      setError('Geolocation is not supported by your browser');
      return;
    }

    setLoading(true);
    setError(null);

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        try {
          const { latitude, longitude } = position.coords;
          const apiUrl = import.meta.env.VITE_API_URL;

          const response = await fetch(
            `${apiUrl}?lat=${latitude}&lng=${longitude}`
          );

          if (!response.ok) {
            throw new Error('Location not found or service unavailable');
          }

          const result = await response.json();
          setData(result);
          setCity(result.city || '');
        } catch (err) {
          setError(err.message);
          setData(null);
        } finally {
          setLoading(false);
        }
      },
      (err) => {
        setError('Unable to retrieve your location');
        setLoading(false);
      }
    );
  };

  return (
    <ThemeProvider>
      <div className="App min-h-screen bg-gray-50 dark:bg-gray-900">
        <Header />

        {/* Hero/Search Section */}
        <section id="home" className="pt-32 pb-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                Public Transport Guide
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-400">
                Find your way around any city with ease
              </p>
            </div>

            {/* Search Form */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 mb-8">
              <form onSubmit={handleSearch} className="space-y-4">
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="flex-1 relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                    <input
                      type="text"
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      placeholder="Enter city name..."
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-amber-500 dark:focus:ring-amber-400 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                      disabled={loading}
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={loading || !city.trim()}
                    className="px-6 py-3 bg-amber-600 hover:bg-amber-700 dark:bg-amber-500 dark:hover:bg-amber-600 text-white font-medium rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="animate-spin" size={20} />
                        Searching...
                      </>
                    ) : (
                      'Search'
                    )}
                  </button>
                </div>

                <div className="flex items-center justify-center">
                  <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400">
                    <div className="h-px bg-gray-300 dark:bg-gray-600 w-12"></div>
                    <span className="text-sm">or</span>
                    <div className="h-px bg-gray-300 dark:bg-gray-600 w-12"></div>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleUseLocation}
                  disabled={loading}
                  className="w-full px-6 py-3 bg-white dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 text-gray-900 dark:text-white font-medium rounded-lg border-2 border-gray-300 dark:border-gray-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  <MapPin size={20} />
                  Use My Location
                </button>
              </form>

              {error && (
                <div className="mt-4 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
                  <p className="text-red-600 dark:text-red-400 text-sm">{error}</p>
                </div>
              )}
            </div>

            {/* Results */}
            {data && (
              <div className="space-y-8 animate-fade-in">
                {/* City Header */}
                <div className="bg-gradient-to-r from-amber-600 to-amber-700 dark:from-amber-700 dark:to-amber-800 rounded-lg shadow-lg p-8 text-white">
                  <h2 className="text-3xl font-bold mb-2">{data.city}</h2>
                  <div className="flex flex-wrap gap-4 text-amber-100">
                    <span>Currency: {data.currency}</span>
                    <span>•</span>
                    <span>Transport: {data.primaryTransportModes?.join(', ')}</span>
                  </div>
                </div>

                {/* Transport Apps */}
                {data.transportApps && data.transportApps.length > 0 && (
                  <TransportApps apps={data.transportApps} />
                )}

                {/* Ticketing Info */}
                {data.ticketingInfo && (
                  <TicketingInfo info={data.ticketingInfo} />
                )}

                {/* Travel Tips */}
                {data.travelTips && data.travelTips.length > 0 && (
                  <TravelTips tips={data.travelTips} />
                )}

                {/* Emergency Info */}
                {data.emergencyInfo && (
                  <EmergencyInfo info={data.emergencyInfo} />
                )}
              </div>
            )}
          </div>
        </section>

        <Footer />
        <ScrollToTop />
      </div>
    </ThemeProvider>
  );
}

export default App;
