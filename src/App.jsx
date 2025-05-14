import "./App.css";
import HeroSection from "./components/HeroSection/HeroSection";
import Footer from "./shared/Footer/Footer";
import Navbar from "./shared/Navbar/Navbar";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <HeroSection></HeroSection>
      <Footer></Footer>
    </>
  );
}

export default App;
