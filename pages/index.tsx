import Footer from "@/components/Footer";
import FormContact from "@/components/FormContact";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";
import Map from "@/islands/Map";

const Home = () => {
  return (
    <>
      <div className="md:p-[4%] p-[7%]">
        <Header />
        <Hero />
        <Testimonials />
        <Map />
        <FormContact />
      </div>
      <Footer />
    </>
  );
};

export default Home;
