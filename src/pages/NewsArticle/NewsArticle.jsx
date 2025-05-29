import {useParams} from 'react-router-dom';
import {MockNewsData} from '../News/Const/MockNewsData.js';
import {NewsCard} from '../../components/NewsCard/NewsCard.jsx';

const NewsArticle = () => {
  const { id } = useParams();
  const renderData = MockNewsData.find((el) => el.id === id);

  return (
    <>
      <header className='bg-white shadow'>
        <div className='mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8'>
          <h1 className='text-3xl font-bold tracking-tight text-gray-900'>
            Заголовок #{renderData.id} новости
          </h1>
        </div>
      </header>
      <main>
        <div className='mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8'>
          <NewsCard {...renderData} />
        </div>
      </main>
    </>
  );
}

export default NewsArticle;
