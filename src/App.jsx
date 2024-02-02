import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FotoProvider } from "./context/FotoContext";
import Navbar from "./components/Navbar";
import Home from "./views/Home";
import Favorites from "./views/Favorites";
import NotFound from "./views/NotFound";

function App() {
  return (
    <FotoProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </FotoProvider>
  );
}

export default App;
