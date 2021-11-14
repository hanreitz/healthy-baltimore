import './App.css';
import { Switch, Route } from 'react-router-dom'
import Navbar from './presentationComponents/Navbar'
import Header from './presentationComponents/Header'
import About from './presentationComponents/About'
import Resources from './presentationComponents/Resources'
import Footer from './presentationComponents/Footer'
import Main from './containers/Main';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Main />
      <Footer />
      <Switch>
        <Route path='/about' component={<About />} />
        <Route path='/resources' component={<Resources />} />
      </Switch>
    </div>
  );
}

export default App;
