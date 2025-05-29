import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

export const NewsCard = (props) => {
  const { id, date, poster, title, description } = props;

  return (
    <Link to={`/news/${id}`} className='flex flex-col basis-1/2'>
      <img src={poster} className='logo mr-5' alt='news 1'/>
      <div>{date}</div>
      <div>{title}</div>
      <p>{description}</p>
    </Link>
  );
}

NewsCard.PropTypes = {
  id: PropTypes.string,
  poster: PropTypes.string,
  title: PropTypes.string,
  date: PropTypes.string,
  description: PropTypes.string,
}

