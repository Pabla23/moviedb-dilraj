// AppRouter

// Development Components
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// Components
import Header from '../components/Header';
import Footer from '../components/Footer';
// Pages
import PageHome from '../pages/PageHome';
import PageAbout from '../pages/PageAbout';
import PageFavourites from '../pages/PageFavourites';
import PageNotFound from '../pages/PageNotFound';
import PageMovie from '../pages/PageMovie';

function AppRouter() {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <Header />
          <main>
            <Routes>
              <Route path="/" exact element={<PageHome />} />
              <Route path="/sort/popular" element={<PageHome sort = "popular"/>} />
              <Route path="/sort/top-rated" element={<PageHome sort = "top_rated"/>} />
              <Route path="/sort/now-playing" element={<PageHome sort = "now_playing"/>} />
              <Route path="/sort/upcoming" element={<PageHome sort = "upcoming"/>} />
              <Route path="/about" element={<PageAbout />} />
              <Route path="/favourites" element={<PageFavourites />} />
              <Route path="*" element={<PageNotFound />} />
              <Route path="/movie/:id" element={<PageMovie />} />
            </Routes>
          </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default AppRouter;
