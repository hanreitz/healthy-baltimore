import './App.css';
import Navbar from './presentationComponents/Navbar'
import Header from './presentationComponents/Header'
import About from './presentationComponents/About'
import Footer from './presentationComponents/Footer'
import Main from './containers/Main';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Main />
      <About />
      <Footer />
    </div>
  );
}

export default App;
