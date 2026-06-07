import Hero from '../component/Hero';
import AboutUs from '../component/AboutUs';
import PopularTours from '../component/PopularTours';
import WhyChooseUs from '../component/WhyChooseUS';
import Testimonials from '../component/TEstimonials';
import CallToAction from '../component/CallToAction';
import Stats from '../component/Stats';
import BlogSection from '../component/BlogSection';
import Navbar from "../component/Navbar.jsx";
import Footer from "../component/Footer.jsx"
const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      
      <AboutUs />
      <WhyChooseUs />
      <PopularTours />
      <Stats />
      <Testimonials />
      <BlogSection />
      <CallToAction />

      <Footer/>
    </div>
  );
};

export default Home;