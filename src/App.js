import Home from "./pages/Home"
import Seoul from "./pages/Seoul"
import Yerevan from "./pages/Yerevan"
import Moscow from "./pages/Moscow"
import Tokyo from "./pages/Tokyo"
import './Style/global.css';
import { BrowserRouter as Router, Routes, Route,  } from 'react-router-dom';



function App() {
  return (
  
    <Router>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/Seoul" element={<Seoul />} />
            <Route path="/Tokyo" element={<Tokyo />} />
            <Route path="/Yerevan" element={<Yerevan />} />
            <Route path="/Moscow" element={<Moscow />} />
        </Routes>
    </Router>

  );
}

export default App;
