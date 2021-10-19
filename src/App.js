import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './component/Header/Header';
import Banner from './component/Banner/Banner';
import Services from './component/Services/Services';
import Doctors from './component/Doctors/Doctors';
import Login from './component/Login/Login';
import About from './component/About/About';
import Contact from './component/Contact/Contact';


function App() {
  return (
    <div className="App">
      <Header></Header>
        <Banner></Banner>
        <Services></Services>
        <Doctors></Doctors>
        <Login></Login>
        <About></About>
        <Contact></Contact>
    </div>
  );
}

export default App;


