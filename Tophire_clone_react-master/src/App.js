import Cards from "./components/Cards";
import Companies from "./components/Companies";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import Profile2 from "./components/Profile2";
import Profile3 from "./components/Profile3";
import Profile4 from "./components/Profile4";
import Profile5 from "./components/Profile5";
import Reviews from "./components/Reviews";
import Video from "./components/Video";
import Last from "./components/Last";
import Footer from "./components/Footer";
function App() {
  return (
       <div>
         <Navbar />
         <Header />
         <Cards />
         <Companies />
         <Profile />
         <Profile2 />
         <Profile3 />
         <Profile4 />
         <Profile5 />
         <Video />
         <Reviews / >
         <Last />
         <Footer />
       </div>
  );
}

export default App;
