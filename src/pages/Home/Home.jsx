import {Link} from 'react-router-dom';
import { useState, useEffect } from "react";
import { Spinner,  } from "@material-tailwind/react";
import { Swiper, SwiperSlide } from 'swiper/react';
import MainBg from '../../assets/images/main_bg.png';
import Linear from '../../assets/images/linear.png';
import { apiToken } from '../../const/apiToken';

const Home = () => {
  const [films, setFilms] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch('https://api.kinopoisk.dev/v1.4/movie?page=1&limit=15&type=movie&rating.kp=6-10&ticketsOnSale=true&year=2025', {
      method: 'GET',
      headers: {
        'X-Api-Key': apiToken,
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(data => {
        setFilms(data.docs);
        setIsLoading(false);
      })
      .catch(error => console.error('Error:', error));

  }, []);

  return (
    <>
      <header className='bg-white shadow'>
        <div className='mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8'>
          <div className='relative flex justify-center items-center w-full h-[400px] bg-no-repeat bg-cover' style={{ backgroundImage: `url(${MainBg})` }}>
            {/* <h1 className="text-[120px] font-normal tracking-tight text-white z-10 font-montserrat"> Смотри глубже </h1> */}
            <h1 className="text-[40px] md:text-[80px] lg:text-[120px] font-normal tracking-tight text-white z-10 font-montserrat">
  Смотри глубже
</h1>
            <div className='absolute flex justify-center items-center w-full h-full bg-no-repeat bg-cover' style={{ backgroundImage: `url(${Linear})` }}/>
          </div>
        </div>
      </header>
      <main>
        <div className='mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8'>
          <div className='flex flex-col md:flex-row justify-between font-montserrat text-black font-bold'>
            <div>На связи с вами с 2025 года</div>
            <div>Найдем кино по душе абсолютно для всех</div>
            <Link to='/about' className='text-black hover:text-blue-700 font-montserrat text-black font-bold underline'>Узнать подробнее</Link>
          </div>
        </div>

        <div className='mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8'>
          <h1 className='text-3xl mb-8 font-bold tracking-tight text-black z-10 font-montserrat'>Смотрят сейчас</h1>
          <Swiper
            spaceBetween={30}
            slidesPerView={4}
            breakpoints={{
              0: {
                slidesPerView: 1, // For mobile devices
              },
              768: {
                slidesPerView: 3, // Tablets
              },
              1024: {
                slidesPerView: 4, // Desktop
              },
            }}
          >
            {isLoading && <Spinner />}
            {!isLoading && films.map((film) => (
              <SwiperSlide key={film.id}>
                <Link to={`/film/${film.id}`} className='relative flex flex-col h-[400px] text-gray-700'>
                  <img src={film.poster.previewUrl} className='logo w-full' alt={film.name}/>
                  <div className='absolute bg-black bg-opacity-60 left-0 bottom-0 px-3 py-2 text-white'>
                    <div className='flex w-[250px] justify-between space-x-2 text-nowrap overflow-hidden overflow-ellipsis'>
                      <div className='text-nowrap overflow-hidden overflow-ellipsis font-montserrat font-bold'>{film.name}</div>
                      <div className='px-1 py-1 border-2 rounded-md text-xs leading-tight'>{film.ageRating}+</div>
                    </div>
                    <div className='overflow-hidden overflow-ellipsis text-xs font-normal multiline-overflow font-montserrat'>{film.description}</div>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </main>
    </>
  );
}

export default Home;
