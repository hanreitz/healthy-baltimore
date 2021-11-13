import logo from './logo.svg';
import './App.css';
import Navbar from './presentationComponents/Navbar'
import Header from './presentationComponents/Header'
import About from './presentationComponents/About'
import Footer from './presentationComponents/Footer'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <About />
      <Footer />
    </div>
  );
}

export default App;
