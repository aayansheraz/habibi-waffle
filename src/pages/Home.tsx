import Navbar from "../components/Navbar";
import ScrollVideoStory from "../components/ScrollVideoStory";
import ScrollPictures from "../components/ScrollPictures";
import StripedPoster from "../components/StripedPoster";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main className="bg-black">
      <Navbar />
      <div id="story">
        <ScrollVideoStory />
      </div>
      <div id="offer">
        <ScrollPictures />
      </div>
      <div id="menus">
        <StripedPoster />
      </div>
      <Footer />
    </main>
  );
}
