import './App.css';
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import StoryComponent from './components/StoryComponent/StoryComponent';
import TrainedProducts from './components/TrainedProducts/TrainedProducts'
import Why from './components/WhyComponent/Why'
import Connect from './components/ConnectComponent/Connect'
import Training from './components/Training/Training'
import Trainer from "./components/Trainer/Trainer"
import Footer from './components/Footer/Footer'

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <StoryComponent />
      <TrainedProducts />
      <Why />
      <Connect />
      <Training />
      <Trainer />
      <Footer />
    </>
  );
}

export default App;
