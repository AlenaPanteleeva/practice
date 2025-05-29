import {Link} from 'react-router-dom';

const Home = () => {
  return (
    <>
      <header className='bg-white shadow'>
        <div className='mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8'>
          <h1 className='text-3xl font-bold tracking-tight text-gray-900'>Заголовок главной</h1>
        </div>
      </header>
      <main>
        <div className='mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8'>
          Контент главной

          <div className='flex justify-between'>
            <div>На связи с вами с 2025 года</div>
            <div>Найдем кино по душе абсолютно для всех</div>
            <Link to='/about'>Узнать подробнее</Link>
          </div>
        </div>
      </main>
    </>
  );
}

export default Home;
