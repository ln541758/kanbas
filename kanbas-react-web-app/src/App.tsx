import Kanbas from "./Kanbas";

import { HashRouter, Route, Routes, Navigate } from 'react-router-dom';
import "./index.css";
import TOC from "./TOC";

function App() {
  return (
    <HashRouter>
    <div className="h-100">

      <Routes>
      <Route path="/" element={<TOC />} />

      <Route path="/Kanbas/*" element={<Kanbas />} />
      </Routes>
      {/* Kanbas */}


    </div>
    </HashRouter>
  );
}

export default App;
