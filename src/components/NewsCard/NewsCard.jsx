import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

export const NewsCard = (props) => {
  const { id, date, poster, title, description, showDescription = true } = props;

  return (
    <Link to={`/news/${id}`} className='flex flex-col border rounded-lg overflow-hidden shadow hover:shadow-md transition-shadow'>
      <img 
        src={poster} 
        className='w-full h-64 object-cover' 
        alt={title}
      />
      <div className='p-4'>
        <div className='text-sm text-gray-600 mb-2 font-montserrat'>{date}</div>
        <h3 className='text-xl font-semibold mb-2 text-black font-montserrat italic'>{title}</h3>
        {showDescription && <p className='text-gray-900 font-montserrat'>{description}</p>}
      </div>
    </Link>
  );
}

NewsCard.propTypes = {
  id: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  description: PropTypes.string,
  showDescription: PropTypes.bool
};

NewsCard.defaultProps = {
  showDescription: true
};