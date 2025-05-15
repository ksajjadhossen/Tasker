import "./App.css";
import HeroSection from "./components/HeroSection/HeroSection";
import TaskBoard from "./components/TaskBorard/TaskBoard";
import Footer from "./shared/Footer/Footer";
import Navbar from "./shared/Navbar/Navbar";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <div className="flex flex-col items-center justify-center">
        <HeroSection></HeroSection>
        <TaskBoard></TaskBoard>
      </div>

      <Footer></Footer>
    </>
  );
}

export default App;
