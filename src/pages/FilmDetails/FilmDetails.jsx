import {useParams} from 'react-router-dom';
import {useEffect, useState} from 'react';
import {formatMovieLength} from './Helper/formatMovieLength.js';
import {apiToken} from '../../const/apiToken.js';

const FilmDetails = () => {
  const { id } = useParams();

  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(`https://api.kinopoisk.dev/v1.4/movie/${id}`, {
      method: 'GET',
      headers: {
        'X-Api-Key': apiToken,
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(data => {
        setData(data);
        console.log(data);
      })
      .catch(error => console.error('Error:', error));

  }, [id]);

  if (!data) {
    return null;
  }

  return (
    <main>
      <div className='mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8'>
        <div className='flex flex-col'>
          <img src={data.poster.previewUrl} className='logo w-64 mr-5' alt='news 1'/>
          <div>{data.name}</div>
          <div className='flex space-x-4'>
            {data.genres.map((el) => (
              <div key={el.name} className='border-solid border-2 rounded-md px-3 py-2'>{el.name}</div>
            ))}
          </div>
          <div>Продолжительность: {formatMovieLength(data.movieLength)}</div>
          <div>Ограничение: {data.ageRating}+</div>
          <div style={{ borderBottom: '5px solid' }}></div>
          <div>{data.description}</div>
        </div>
      </div>
    </main>
  );
}

export default FilmDetails;
