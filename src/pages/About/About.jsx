import { Link } from 'react-router-dom';
import aboutImage from '../../assets/images/about.png'; 

const About = () => {
  return (
    <>
      <header className='bg-white shadow'>
        <div className='mx-auto max-w-7xl px-4 py-2 sm:px-6 lg:px-8'>
          <div className='flex justify-between items-center'>
            <div className='flex flex-col'>
              <h1 className='text-2xl font-bold tracking-tight text-gray-900'>С нами смотрят</h1>
              <p className='text-1xl font-bold text-gray-600 mt-2'>120 тыс. человек</p>
            </div>
            <Link to='/' className='text-black hover:text-blue-700 font-montserrat text-black font-bold underline'>
              Вернуться
            </Link>
          </div>
        </div>
      </header>
      
      <main className='bg-gray-30'>
        <div className='mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 text-center'>
          <p className='text-3xl italic font-light text-black'>
            «Смотри глубже» — ваш проводник в мир настоящего кино!
          </p>
        </div>
        
        <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-8'>
          <div className='flex flex-col lg:flex-row gap-8'>
            <div className='lg:w-2/3 bg-white shadow rounded-lg p-6'>
              <div className='prose prose-lg mx-auto text-gray-900'>
                <p className='text-xl leading-relaxed mb-3'>
                  Добро пожаловать на платформу «Смотри глубже» — уникальный кинематографический ресурс, созданный для ценителей глубокого и осмысленного кино.
                </p>
                
                <p className='text-xl leading-relaxed mb-3'>
                  Это не просто каталог фильмов, а путеводитель по тем годам кинематографического искусства, которые остаются невидимыми при поверхностном просмотре. Здесь собраны ленты, требующие вашего внимательного взгляда – картины, которые не просто рассказывают историю, а заставляют переживать её снова и снова.
                </p>
                
                <p className='text-xl leading-relaxed mb-3'>
                  К нам присоединились уже 120 000 человек — критиков, киноманов и тех, кто ищет в кино не только развлечение, но и пищу для ума.
                </p>
              </div>
            </div>
            
            <div className='lg:w-1/3 flex items-center justify-center'>
              <img 
                src={aboutImage}  
                className='w-full h-auto object-cover rounded-lg shadow-lg max-h-[600px]'
              />
            </div>
          </div>
        </div>
        <div className='mx-auto max-w-4xl px-5 py-12 sm:px-6 lg:px-8 text-center'>
          <p className='text-3xl font-bold text-gray-900'>
            120 000 человек уже смотрят кино иначе. А ты?
          </p>
          <p className='text-1xl font-montserrat italic text-gray-700'>
            По всем вопросам, предложениям и техническим неполадкам обращайтесь на нашу почту: support@smotriglubzhe.ru
Мы ценим ваше мнение и постараемся ответить максимально быстро!
          </p>
        </div>
      </main>
    </>
  );
}

export default About;