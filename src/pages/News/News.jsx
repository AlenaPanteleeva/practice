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
          <div className='flex'>
            {MockNewsData.map((news) => (
              <NewsCard key={news.id} {...news} />
            ))}
          </div>
        </div>
      </main>
    </>
  );
}

export default News;
