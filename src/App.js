import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Grid from "./pages/grid/Grid"
import Modal from "./pages/modals/Modal"
import Apod from "./pages/apod/Apod";
import Bored from "./pages/bored/Bored";
import Numbers from "./pages/numbers/Numbers";
import Advices from "./pages/advices/Advices";
import Area from "./pages/area/Area";

function App() {
  return (
    <div className="App">
      <div >
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Grid />}></Route>
            <Route path="/modals" element={<Modal />}></Route>
            <Route path="/apod" element={<Apod />}></Route>
            <Route path="/bored" element={<Bored />}></Route>
            <Route path="/numbers" element={<Numbers />}></Route>
            <Route path="/advices" element={<Advices />}></Route>
            <Route path="/area" element={<Area />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
