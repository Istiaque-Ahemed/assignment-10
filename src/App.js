import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './component/Header/Header';
import Banner from './component/Banner/Banner';
import Services from './component/Services/Services';
import Doctors from './component/Doctors/Doctors';
import Login from './component/Login/Login';
import About from './component/About/About';
import Contact from './component/Contact/Contact';
import Footer from './component/footer/Footer';
import NotFound from './component/NotFound/NotFound'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ServiceDetails from './component/ServiceDetails/ServiceDetails';


function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Header></Header>
            <Banner></Banner>
            <Services></Services>
            <Footer></Footer> 
          </Route>
          <Route path="/home">
            <Header></Header>
            <Banner></Banner>
            <Services></Services>
            <Doctors></Doctors>
            <Footer></Footer>
          </Route>
          <Route path="/services">
            <Header></Header>
            <Services></Services>
            <Footer></Footer>
          </Route>
          <Route path="/service/:serviceId">
            <Header></Header>
            <ServiceDetails></ServiceDetails>
            <Footer></Footer>

          </Route>
          <Route path="/about">
            <Header></Header>
            <About></About>
            <Footer></Footer>
          </Route>
          <Route path="/contact">
            <Header></Header>
            <Contact></Contact>
            <Footer></Footer>
          </Route>
          <Route path="/login">
            <Header></Header>
            <Login></Login>
            <Footer></Footer>

            
          </Route>
          <Route path="*">
            <Header></Header>
            <NotFound></NotFound>
            <Footer></Footer>
          </Route>
        </Switch>
      </BrowserRouter>



      
    </div>
  );
}

export default App;


