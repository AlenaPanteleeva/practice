import {Link} from 'react-router-dom';

const About = () => {
  return (
    <>
      <header className='bg-white shadow'>
        <div className='mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8'>
          <div className='flex justify-between'>
            <div className='flex flex-col'>
              <h1 className='text-3xl font-bold tracking-tight text-gray-900'>С нами смотрят</h1>
              <p>120 тыс. человек</p>
            </div>
            <Link to='/'>Вернуться</Link>
          </div>
        </div>
      </header>
      <main>
        <div className='mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8'>
          «Смотри глубже» — ваш проводник
          в мир настоящего кино!
        </div>
        <div className='mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8'>
          «Смотри глубже» — ваш проводник
          в мир настоящего кино!
        </div>
      </main>
    </>
  );
}

export default About;
