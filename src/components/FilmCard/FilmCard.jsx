import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

export const FilmCard = (props) => {
  const { id, poster, name, ageRating } = props;

  return (
    <Link to={`/film/${id}`} className='relative flex flex-col'>
      <img src={poster.previewUrl} className='logo w-64' alt='news 1'/>
      <div className='w-64 overflow-ellipsis text-nowrap overflow-hidden'>{name}</div>
      <div className='absolute right-4 bottom-8 bg-black text-white border-2 rounded-md px-3 py-2'>{ageRating}+</div>
    </Link>
  );
}

FilmCard.PropTypes = {
  id: PropTypes.string,
  poster: PropTypes.object,
  title: PropTypes.string,
  date: PropTypes.string,
  ageRating: PropTypes.string,
}

