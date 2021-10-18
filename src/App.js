import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './component/Header/Header';
import Banner from './component/Banner/Banner';
import Service from './component/Service/Service';
import Services from './component/Services/Services';


function App() {
  return (
    <div className="App">
      <Header></Header>
        <Banner></Banner>
        <Services></Services>
    </div>
  );
}

export default App;


