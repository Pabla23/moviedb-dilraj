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
              <Route path="/about" element={<PageAbout />} />
              <Route path="/favourites" element={<PageFavourites />} />
              <Route path="*" element={<PageNotFound />} />
              <Route path="/movie" element={<PageMovie />} />
            </Routes>
          </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default AppRouter;
