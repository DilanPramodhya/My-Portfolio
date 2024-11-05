import About from "./sub-components/About";
import Contact from "./sub-components/Contact";
import Hero from "./sub-components/Hero";
import Portfolio from "./sub-components/Portfolio";
import Skills from "./sub-components/Skills";
import Timeline from "./sub-components/Timeline";
import Apps from "./sub-components/Apps";
import Navbar from "./sub-components/Navbar";

const Home = () => {
  return (
    <div>
      <Navbar />
      <article className="px-5 mt-10 sm:mt-14 md:mt-16 lg:mt-24 xl:mt-32 sm:mx-auto w-full max-w-[1050px] flex flex-col gap-14">
        <Hero />
        <Timeline />
        <About />
        <Skills />
        <Portfolio />
        <Apps />
        <Contact />
      </article>
    </div>
  );
};

export default Home;
