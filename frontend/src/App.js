import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <Router>
      <NavBar />
      <Footer />
    </Router>
  );
};
export default App;
