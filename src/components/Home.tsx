// ==================== Components ==================== 
import Menu from "./Menu";
import Hero from "./Hero";

const Home = () => {
  return (
    <section className="w-full min-h-screen flex flex-col overflow-x-hidden">
      {/* Navbar */}
      <div className="w-full max-w-7xl h-full mx-auto lg:px-4 flex justify-center">
        <Menu />
      </div>
      
      {/* Hero Section */}
      <div className="w-full h-full max-w-7xl md:mx-auto">
        <Hero />
      </div>
    </section>
  );
};

export default Home;
