import './App.css';
import About from './components/about/About';
import Carousel from './components/carousel/Carousel';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Intro from './components/Intro/Intro';
import Project from './components/project/Project';
import Service from './components/servicess/Service';
import Testimonial from './components/testimonials/Testimonial';

function App() {
  return (
    <>
    <Header />
    <Intro />
    <About />
    <Service />
    <Project />
    <Testimonial />
    <Carousel />
    <Contact />
    <Footer />
    </>
  );
}

export default App;
