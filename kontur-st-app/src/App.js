import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//Компоненты
import Header from './components/Header';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
import Services from './components/Services';
import KazakhMap from './components/KazakhstanMap';
import Partners from './components/Partners';
//Скролл
import ScrollToTop from './components/ScrollToTop';
//О нас
import AboutPage from './pages/about/AboutPage';
//Видео
import VideoSolutions from './pages/video/VideoSolutions';
import MotorolaPage from './pages/video/MotorolaPage';
import WisenetPage from './pages/video/WisenetPage';
import MilestonePage from './pages/video/MilestonePage';
import RecFacesPage from './pages/video/RecFacesPage';

//Локально вычислительные системы
import LocalSystems from './pages/localsystems/LocalSystems';

//Антитеррор
import AntiterrorSystems from './pages/antiterror/AntiterrorSystems';

//Криминалистика 
import DigitalForensics from './pages/digitalforensics/DigitalForensics';

//Дроны
import DronesSection from './pages/DronesSection/DronesSection';

//Анти-БПЛА
import AntidroneSystems from './pages/antidronesystems/AntidroneSystems';

//СТС
import STSPage from './pages/sts/STSPage';
function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <>
                
                <HeroSection />
                <Services />
                <KazakhMap />
                <Partners />
              </>
            }
          />
          <Route path="/about" element={<AboutPage />} />
          
          <Route path="/video" element={<VideoSolutions />} />
          <Route path="/video/motorola" element={<MotorolaPage />} />
          <Route path="/video/wisenet" element={<WisenetPage />} />
          <Route path="/video/milestone" element={<MilestonePage />} />
          <Route path="/video/recfaces" element={<RecFacesPage />} />

          <Route path="/localsystems" element={<LocalSystems />} />

          <Route path="/antiterror" element={<AntiterrorSystems />} />

          <Route path="/digitalforensics" element={<DigitalForensics />} />
          
          <Route path="/drones" element={<DronesSection />} />

          <Route path="/antidrone" element={<AntidroneSystems />} />

          <Route path="/sts" element={<STSPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

