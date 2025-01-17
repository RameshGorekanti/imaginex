import Image from "next/image";
import Header from "./Components/Header";
import Ourpassionate from "./Components/Ourpassionate";
import LetusHelp from "./Components/LetusHelp";
import Whatweoffer from "./Components/Whatweoffer";
import Ourworkspeacks from "./Components/Ourworkspeacks";
import Meettheteam from "./Components/Meettheteam";
import ContactUs from "./Components/ContactUs";
import Details from "./Components/Details";
import Footer from "./Components/Footer";
import Innovative from "./Components/Innovative";
import OurServices from "./Components/OurServices";

export default function Home() {
  return (
    <div>
      <Header />
      <Ourpassionate />
      <Innovative />
      <OurServices />
      {/* <LetusHelp /> */}
      <Whatweoffer />
      <Ourworkspeacks />
      <Meettheteam />
      <ContactUs />
      <Details />
      <Footer />
    </div>
  );
}
