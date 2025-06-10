import {MockNewsData} from './Const/MockNewsData.js';
import {NewsCard} from '../../components/NewsCard/NewsCard.jsx';

const News = () => {
  return (
    <>
      <header className='bg-white shadow'>
        <div className='mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8'>
          <h1 className='text-3xl font-bold tracking-tight text-gray-900'>Новости кинематографа</h1>
        </div>
      </header>
      <main>
        <div className='mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {MockNewsData.map((news) => (
              <NewsCard key={news.id} {...news} showDescription={false} />
            ))}
          </div>
        </div>
      </main>
    </>
  );
}

export default News;