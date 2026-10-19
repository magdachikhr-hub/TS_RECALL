import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Parent from "./components/Parent";
import { Routes, Route } from "react-router-dom";
import { ThemeContext } from "./context/themeContext";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Contact from "./pages/Contact";
function App() {
  let theme = "dark";
  return (
    <>
      <Header></Header>
      {/* 3.3 */}
      <ThemeContext.Provider value={theme}>
        <Parent></Parent>
      </ThemeContext.Provider>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/products" element={<Products></Products>}></Route>
        <Route path="/contacts" element={<Contact></Contact>}></Route>
      </Routes>
      <Footer></Footer>
    </>
  );
}

export default App;
