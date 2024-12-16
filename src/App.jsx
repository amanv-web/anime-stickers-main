import Nav from "./Components/Home/Nav";
import { Outlet } from "react-router-dom";
import Footer from "./Components/Home/Footer";
import ScrollToTop from "./Components/hook/ScrollOnTop.jsx";
import { ToastContainer } from "react-toastify";
function App() {
  return (
    <>
      <ScrollToTop />
      <Nav />
      <Outlet />
      <Footer />
      <ToastContainer autoClose={2000} draggablePercent={60} />

    </>
  );
}

export default App;
