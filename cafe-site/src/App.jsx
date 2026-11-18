import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Features from "./components/sections/Features";
import MenuSection from "./components/sections/Menu/MenuSection";
import Gallery from "./components/sections/Gallery";
import Testimonials from "./components/sections/Testimonials";
import Reservation from "./components/sections/Reservation";
import ScrollToTopButton from "./components/ui/ScrollToTopButton";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Features />
        <MenuSection />
        <Gallery />
        <Testimonials />
        <Reservation />
      </main>
      <Footer />
      <ScrollToTopButton />
    </>
  );
}
