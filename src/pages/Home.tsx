import Navbar from "../components/Navbar";
import ScrollVideoStory from "../components/ScrollVideoStory";
import FoodCarousel from "../components/FoodCarousel";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main className="bg-black">
      <Navbar />
      <div id="story">
        <ScrollVideoStory />
      </div>
      <div id="menus">
        <FoodCarousel />
      </div>
      <Footer />
    </main>
  );
}
