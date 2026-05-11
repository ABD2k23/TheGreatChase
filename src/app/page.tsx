import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Info from "@/components/Info";
// import Popular from "@/components/Popular";
import PopularSecond from "@/components/PopularSecond";
import Story from "@/components/Story";
import Testimonials from "@/components/Testimonials";

const page = () => {
  return (
    <div>
      <Hero />
      <Info />
      <PopularSecond />
      <Testimonials />
      <Story />
      <Footer />
    </div>
  );
};

export default page;
