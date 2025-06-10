import {Link} from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className='bg-black flex flex-col md:flex-row items-center justify-center md:space-x-4 space-y-4 md:space-y-0 py-2'>
      <Link to='/now-cinema' className='border-solid border-2 rounded-md px-3 py-2 text-white font-montserrat font-normal tracking-tight text-xl'>Сейчас в кино</Link>
      <Link to='/cinemas' className='border-solid border-2 rounded-md px-3 py-2 text-white font-montserrat font-normal tracking-tight text-xl'>Кинотеатры города Барнаула</Link>
    </footer>
  );
};
