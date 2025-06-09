import {useEffect, useState, useRef} from 'react';
import { Input, Spinner } from "@material-tailwind/react";
import {apiToken} from '../../const/apiToken.js';
import {FilmCard} from '../../components/FilmCard/FilmCard.jsx';

const AllFilms = () => {
  const [films, setFilms] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const debounceTimeout = useRef(null);

  function debounce(func, delay) {
    return function(...args) {
      if (debounceTimeout.current) clearTimeout(debounceTimeout.current);
      debounceTimeout.current = setTimeout(() => {
        func(...args);
        debounceTimeout.current = null;
      }, delay);
    };
  }

  useEffect(() => {
    fetch('https://api.kinopoisk.dev/v1.4/movie?page=1&limit=12&lists=top250', {
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

  const handleChange = () => {
    if (isFetching) {
      return;
    }

    setIsFetching(true);
    fetch(`https://api.kinopoisk.dev/v1.4/movie/search?query=${searchTerm}&limit=12`, {
      method: 'GET',
      headers: {
        'X-Api-Key': apiToken,
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(data => {
        setFilms(data.docs.filter((el) => el.name));
        setIsFetching(false);
      })
      .catch(error => console.error('Error:', error));
  };

  const debouncedSearch = debounce(handleChange, 1000);

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
    debouncedSearch(e.target.value);
  };

  return (
    <>
      <header className='bg-white shadow'>
        <div className='mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8'>
          <h1 className='text-3xl font-bold tracking-tight text-gray-900'>Все фильмы</h1>
        </div>
      </header>
      <main>
        <div className='mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8'>
          <div className='mb-4'>
            <Input className="mb-4" label=' Поиск по названию' onChange={handleInputChange} />
          </div>

          <div className='flex flex-wrap justify-between space-x-4 space-y-4'>
            {films.map((film) => (
              <FilmCard key={film.id} {...film} isFetching={isFetching} />
            ))}
          </div>
        </div>
      </main>
    </>
  );
}

export default AllFilms;
