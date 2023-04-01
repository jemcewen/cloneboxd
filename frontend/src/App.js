import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './layouts/NavBar/NavBar';
import Footer from './layouts/Footer/Footer';
import Home from './pages/Home/Home';

const App = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
      <Footer />
    </Router>
  );
};
export default App;
