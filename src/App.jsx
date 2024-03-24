import About from "./components/sections/About";
import Hero from "./components/sections/Hero";
import ImageBanner from "./components/sections/ImageBanner";
import Navbar from "./components/sections/Navbar";
import SectionWrap from "./components/sections/SectionWrap";
import Services from "./components/sections/Services";
import LocomotiveScroll from "locomotive-scroll";

new LocomotiveScroll({
  lenisOptions: {
    wrapper: window,
    content: document.documentElement,
    lerp: 0.1,
    duration: 2,
    orientation: "vertical",
    gestureOrientation: "vertical",
    smoothWheel: true,
    smoothTouch: false,
    wheelMultiplier: 1,
    touchMultiplier: 2,
    normalizeWheel: true,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  },
});

const App = () => {
  return (
    <div className="bg-black w-full text-white">
      <Navbar />
      <Hero />
      <SectionWrap />
      <About />
      <ImageBanner />
      <Services />
    </div>
  );
};

export default App;
