import {Link} from 'react-router-dom';

const Cinemas = () => {
  return (
    <>
      <header className='bg-white shadow'>
        <div className='mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8'>
          <div className='flex justify-between'>
            <div className='flex flex-col'>
              <h1 className='text-3xl font-bold tracking-tight text-gray-900'>Кинотеатры</h1>
            </div>
            <Link to='/'>Вернуться</Link>
          </div>
        </div>
      </header>
      <main>
        <div className='mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8'>
          <div>
            <h1>Европа-Киномир</h1>
            <p>Барнаул
              Павловский тракт, 251В, ТРЦ «Европа»</p>
          </div>
        </div>
      </main>
    </>
  );
}

export default Cinemas;
