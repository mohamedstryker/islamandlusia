import { Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Home } from './pages/Home';
import { Characters } from './pages/Characters';
import { Battles } from './pages/Battles';
import { Timeline } from './pages/Timeline';
import { Conquests } from './pages/Conquests';
import { BattleMap } from './pages/BattleMap';

function App() {
  return (
    <div className="min-h-screen bg-[#f8f4e8] rtl">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/characters" element={<Characters />} />
        <Route path="/battles" element={<Battles />} />
        <Route path="/timeline" element={<Timeline />} />
        <Route path="/conquests" element={<Conquests />} />
        <Route path="/battle-map" element={<BattleMap />} />
      </Routes>
    </div>
  );
}

export default App;