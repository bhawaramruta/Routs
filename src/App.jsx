
import { Navigate, Route, Routes } from "react-router-dom";

import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Navbar from "./componant/Navbar";
import BookTable from "./pages/BookTable";
import Footer from "./componant/Footer";
import Menu from "./pages/Menu";
import MealDetail from "./pages/MealDetail";



function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="home" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="menu" element={<Menu />} />
        <Route path="/cart/:id" element={<MealDetail />} />

        <Route path="booktable" element={<BookTable/>} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
