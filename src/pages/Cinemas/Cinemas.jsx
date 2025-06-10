import { Link } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Fix for default marker icons in Leaflet
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerIconShadow from 'leaflet/dist/images/marker-shadow.png';

const Cinemas = () => {
  const mapRef = useRef(null);
  const mapInstance = useRef(null);

  useEffect(() => {
    if (!mapInstance.current && mapRef.current) {
      // Инициализация карты
      const map = L.map(mapRef.current).setView([53.3552, 83.7699], 13);
      
      // Добавление слоя с картой (используем OpenStreetMap)
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(map);

      // Фикс для иконки маркера
      const defaultIcon = L.icon({
        iconUrl: markerIcon,
        shadowUrl: markerIconShadow,
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41]
      });

      // Добавляем маркеры кинотеатров
      const cinemas = [
        {
          name: "Европа-Киномир",
          address: "Барнаул, Павловский тракт, 251В, ТРЦ «Европа»",
          position: [53.34, 83.68]
        },
        {
          name: "Огни-Киномир",
          address: "Барнаул, Антона Петрова, 219Б, ТРЦ «Огни»",
          position: [53.36, 83.69]
        },
        {
          name: "Арена-Киномир",
          address: "Барнаул, Павловский тракт, 188, ТРЦ «Арена»",
          position: [53.35397104005887, 83.63580464677607]
        },
        {
          name: "Мир",
          address: "Барнаул, пл. Победы, 1, кинотеатр «Мир»",
          position: [53.35105184159601, 83.76255608325572]
        },
      ];

      cinemas.forEach(cinema => {
        L.marker(cinema.position, { icon: defaultIcon })
          .addTo(map)
          .bindPopup(`<b>${cinema.name}</b><br>${cinema.address}`);
      });

      mapInstance.current = map;
    }

    return () => {
      if (mapInstance.current) {
        mapInstance.current.remove();
        mapInstance.current = null;
      }
    };
  }, []);

  return (
    <>
      <header className='bg-white shadow'>
        <div className='mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8'>
          <div className='flex justify-between'>
            <div className='flex flex-col'>
              <h1 className='text-3xl font-bold tracking-tight text-gray-900 font-montserrat'>Кинотеатры</h1>
            </div>
            <Link to='/' className='text-black hover:text-blue-700 font-montserrat text-black font-bold underline'>
              Вернуться
            </Link>
          </div>
        </div>
      </header>
      <main>
        <div className='mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
            {/* Список кинотеатров */}
            <div>
              <div 
                className='mb-6 p-4 bg-white rounded-lg shadow cursor-pointer hover:bg-gray-50'
                onClick={() => {
                  if (mapInstance.current) {
                    mapInstance.current.flyTo([53.34, 83.68], 15);
                  }
                }}
              >
                <h2 className='text-xl font-montserrat font-semibold mb-2'>Европа-Киномир</h2>
                <p className='text-gray-600'>Барнаул, Павловский тракт, 251В, ТРЦ «Европа»</p>
              </div>

              <div 
                className='mb-6 p-4 bg-white rounded-lg shadow cursor-pointer hover:bg-gray-50'
                onClick={() => {
                  if (mapInstance.current) {
                    mapInstance.current.flyTo([53.36, 83.69], 15);
                  }
                }}
              >
                <h2 className='text-xl font-montserrat font-semibold mb-2'>Огни-Киномир</h2>
                <p className='text-gray-600'>Барнаул, Антона Петрова, 219Б, ТРЦ "Огни"</p>
              </div>

              <div 
                className='mb-6 p-4 bg-white rounded-lg shadow cursor-pointer hover:bg-gray-50'
                onClick={() => {
                  if (mapInstance.current) {
                    mapInstance.current.flyTo([53.35458579239037, 83.63992451963813], 15);
                  }
                }}
              >
                <h2 className='text-xl font-montserrat font-semibold mb-2'>Арена-Киномир</h2>
                <p className='text-gray-600'>Барнаул, Павловский тракт, 188, ТРЦ «Арена»</p>
              </div>

              <div 
                className='mb-6 p-4 bg-white rounded-lg shadow cursor-pointer hover:bg-gray-50'
                onClick={() => {
                  if (mapInstance.current) {
                    mapInstance.current.flyTo([53.35153925426809, 83.76418921062921], 15);
                  }
                }}
              >
                <h2 className='text-xl font-montserrat font-semibold mb-2'>Мир</h2>
                <p className='text-gray-600'>Барнаул, пл. Победы, 188, кинотеатр «Мир»</p>
              </div>
            </div>
            
            {/* Карта */}
            <div className='h-96 w-full rounded-lg shadow-lg overflow-hidden'>
              <div 
                ref={mapRef} 
                className='h-full w-full'
                style={{ minHeight: '400px' }}
              />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Cinemas;