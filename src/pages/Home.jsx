import Navbar from "../components/Navbar";
import Header from "../components/header";
import Portofolio from "../components/Portofolio";
import About from "../components/About";
import Exprience from "../components/Exprience";
import Footer from "../components/Footer";
import Kontak from "../components/Kontak";

function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <About />
      <Portofolio />
      <Exprience />
      <Kontak />
      <Footer />
    </>
  );
}

export default Home;
