import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Parent from "./components/Parent";
import { ThemeContext } from "./context/themeContext";
function App() {
  let theme = "dark";
  return (
    <>
      <Header></Header>
      {/* 3.3 */}
      <ThemeContext.Provider value={theme}>
        <Parent></Parent>
      </ThemeContext.Provider>

      <Footer></Footer>
    </>
  );
}

export default App;
