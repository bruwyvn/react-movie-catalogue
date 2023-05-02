import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components
import Header from "./components/Header";

// Pages
import Home from "./pages/Home";
import Details from "./pages/Details";
import Footer from "./components/Footer";
import Register from "./pages/Register";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:movie" element={<Details />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
