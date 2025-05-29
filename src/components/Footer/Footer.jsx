import {Link} from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className='bg-black h-24 flex space-x-4 items-center justify-center'>
      <Link to='/now-cinema' className='border-solid border-2 rounded-md px-3 py-2 text-white'>Сейчас в кино</Link>
      <Link to='/now-cinema' className='border-solid border-2 rounded-md px-3 py-2 text-white'>Календарь кинопремьер</Link>
      <Link to='/cinemas' className='border-solid border-2 rounded-md px-3 py-2 text-white'>Кинотеатры города Барнаула</Link>
    </footer>
  );
};
