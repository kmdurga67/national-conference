import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Speakers from './pages/Speakers';
import Schedule from './pages/Schedule';
import Committees from './pages/Committees';
import Venue from './pages/Venue';
import ConferencePage from "./pages/ConferencePage";

function App() {
  return (
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/speakers" element={<Speakers />} />
            <Route path="/schedule" element={<Schedule />} />
            <Route path="/registration" element={<ConferencePage />} />
            <Route path="/committees" element={<Committees /> } />
            <Route path="/venue" element={<Venue />} />
            <Route path="/contact" element={<div>Contact Page</div>} />
          </Routes>
        </main>
        <Footer />
      </div>
  );
}

export default App;