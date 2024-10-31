import './App.css';
import './index.css'
import Navbar from './components/Navbar';
import Homepage from './pages/Homepage';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Navbar />
      <Homepage />
      <Footer />
    </div>
  );
}

export default App;