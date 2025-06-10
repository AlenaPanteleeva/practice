import PropTypes from 'prop-types';
import { Spinner } from "@material-tailwind/react";
import { Link } from 'react-router-dom';
import { useState } from 'react';

export const FilmCard = (props) => {
  const { id, poster, name, ageRating, isFetching = false } = props;

  const [isImageLoading, setIsImageLoading] = useState(true);

  const handleLoad = () => setIsImageLoading(false);

  return (
    <Link to={`/film/${id}`} className={`bg-black relative flex flex-col h-[400px] text-gray-900`}>
      <img src={poster.previewUrl} className={`logo w-64 ${isFetching || isImageLoading ? 'opacity-50' : ''}`} onLoad={handleLoad} alt={name}/>
      {(isFetching || isImageLoading) && (
        <div className='absolute flex justify-center items-center w-full h-full'>
          <Spinner />
        </div>
      )}
      <div className='absolute bg-black bg-opacity-60 left-0 bottom-0 px-3 py-2 text-white'>
        <div className='flex w-[220px] justify-between space-x-2 text-nowrap overflow-hidden overflow-ellipsis'>
          <div className='text-nowrap overflow-hidden overflow-ellipsis'>{name}</div>
          {ageRating && <div className='px-1 py-1 border-2 rounded-md'>{ageRating}+</div>}
        </div>
      </div>
    </Link>
  );
}

FilmCard.PropTypes = {
  id: PropTypes.string,
  poster: PropTypes.object,
  title: PropTypes.string,
  date: PropTypes.string,
  ageRating: PropTypes.string,
  isFetching: PropTypes.boolean,
}

