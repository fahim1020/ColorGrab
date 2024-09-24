import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Colors } from "./pages/Colors";
import { Home } from "./pages/Home";
import { Converter } from "./pages/Converter";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/colors" element={<Colors />} />
          <Route path="/converter" element={<Converter/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
