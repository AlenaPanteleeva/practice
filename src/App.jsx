import {Route, Routes} from 'react-router-dom';
import {NavMenu} from './components/NavMenu/NavMenu.js';
import {Footer} from './components/Footer/Footer.jsx';
import Home from './pages/Home/Home.jsx';
import News from './pages/News/News.jsx';
import About from './pages/About/About.jsx';
import Cinemas from './pages/Cinemas/Cinemas.jsx';
import AllFilms from './pages/AllFilms/AllFilms.jsx';
import NewsArticle from './pages/NewsArticle/NewsArticle.jsx';
import FilmDetails from './pages/FilmDetails/FilmDetails.jsx';
import NowCinema from './pages/NowCinema/NowCinema.jsx';

function App() {
  return (
    <>
      <NavMenu/>
      <div className='flex flex-col bg-gray-100'>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/news' element={<News/>}/>
          <Route path='/news/:id' element={<NewsArticle />} />
          <Route path='/films' element={<AllFilms/>}/>
          <Route path='/film/:id' element={<FilmDetails />} />
          <Route path='/about' element={<About />} />
          <Route path='/now-cinema' element={<NowCinema />} />
          <Route path='/cinemas' element={<Cinemas />} />
        </Routes>
      </div>
      <Footer />
    </>
  )
}

export default App
