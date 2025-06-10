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

  const posterUrl = data.backdrop.previewUrl.includes('ott') ? data.poster.previewUrl : data.backdrop.previewUrl;

  return (
    <main>
      <div className='mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8'>
        <div className='flex flex-col md:flex-row gap-8'>
          <div className='w-full md:w-1/2'>
            <img
              src={posterUrl}
              alt={data.name}
              className='w-full h-auto object-contain rounded-lg shadow-lg'
              style={{ maxHeight: '70vh' }}
            />
          </div>
          

          <div className='w-full md:w-1/2 space-y-4'>
            <h1 className='text-3xl font-bold text-gray-900 font-montserrat'>{data.name}</h1>
            
            <div className='flex flex-wrap gap-2'>
              {data.genres.map((el) => (
                <span 
                  key={el.name} 
                  className='px-3 py-1 bg-white font-montserrat text-gray-800 italic  rounded-full text-sm font-medium
                             border-2 border-gray-300 hover:border-black transition-colors'
                >
                  {el.name}
                </span>
              ))}
            </div>
            
            <div className='text-lg font-montserrat text-gray-900'>
              <span className='font-semibold'>Продолжительность:</span> {formatMovieLength(data.movieLength)}
            </div>
            
            <div className='text-lg font-montserrat text-gray-900'>
              <span className='font-semibold'>Ограничение:</span> {data.ageRating}+
            </div>
            
            <div className='border-b border-gray-900 my-4'></div>
            
            <div className='text-gray-800 bold space-y-4'>
              <p className='text-lg leading-relaxed font-montserrat'>{data.description}</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default FilmDetails;