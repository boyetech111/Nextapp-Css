import Navbar from "../component/Navbar"
import Header from "../component/Header"
import Process from "../component/Process";
import Product from "../component/Product";
import Footer from "../component/Footer";

export default function Home() {
  return (
    <>
      <Navbar  active={'Home'}/>
      <Header />
      <Process />
      <Product />
      <Footer/>
    </>
  )
}
