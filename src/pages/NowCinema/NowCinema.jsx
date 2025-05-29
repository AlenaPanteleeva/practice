import {useEffect, useState} from 'react';
import {apiToken} from '../../const/apiToken.js';
import {FilmCard} from '../../components/FilmCard/FilmCard.jsx';

const NowCinema = () => {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    fetch('https://api.kinopoisk.dev/v1.4/movie?page=1&limit=12&type=movie&rating.kp=6-10&ticketsOnSale=true&year=2025', {
      method: 'GET',
      headers: {
        'X-Api-Key': apiToken,
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(data => {
        setFilms(data.docs);
      })
      .catch(error => console.error('Error:', error));

  }, []);

  return (
    <>
      <header className='bg-white shadow'>
        <div className='mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8'>
          <h1 className='text-3xl font-bold tracking-tight text-gray-900'>Сейчас в кино</h1>
        </div>
      </header>
      <main>
        <div className='mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8'>
          <div className='flex flex-wrap justify-between space-x-4'>
            {films.map((film) => (
              <FilmCard key={film.id} {...film} />
            ))}
          </div>
        </div>
      </main>
    </>
  );
}

export default NowCinema;
