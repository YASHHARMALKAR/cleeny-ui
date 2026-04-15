import TopBar from "./components/TopBar";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";  
import ServicesSection from "./components/ServicesSection";
import WorkingProcess from "./components/WorkingProcess";
import Portfolio from "./components/Portfolio";
import CallToAction from "./components/CallToAction";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";
import Blog from "./components/Blog";
import Brands from "./components/Brands"; 
import Footer from "./components/Footer";
import Subscribe from "./components/Subscribe";

function App() {
  return (
    <>
      <TopBar />
      <Navbar />

      <section id="home"><Hero /></section>
      <section id="services"><Services /></section>
      <section id="about"><About /></section>
      <section id="services2"><ServicesSection /></section>
      <section id="working"><WorkingProcess /></section>
      <section id="portfolio"><Portfolio /></section>
      <section id="cta"><CallToAction /></section>
      <section id="pricing"><Pricing /></section>
      <section id="testimonials"><Testimonials /></section>
      <section id="blog"><Blog /></section>
      <section id="brands"><Brands /></section>
      <section id="contact">
        <Subscribe />
        <Footer />
      </section>
    </>
  );
}

export default App;