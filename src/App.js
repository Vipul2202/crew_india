import './App.css';
import Navbar from './Components/Navbar/Navbar'
import Splash from './Components/Splash/Splash';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import OurTeam from './Components/Our_Team/OurTeam';
import Gallery from './Components/Gallery/Gallery';
import Cards from './Components/Cards/Cards';
import Faqs from './Components/FAQS/Faqs';
import Footer from './Components/Footer/Footer';
// import Nav from './Components/Nav';
function App() {
  return (
    <>
    {/* <Nav/> */}
    <Navbar />
      <Splash />
      <Home /> 
      <About />
      <OurTeam />
      <Gallery />
      <Cards />
      <Faqs />
      <Footer />
    </>
  );
}

export default App;
