import "./app.scss";
import "@fontsource/source-sans-3";
import { Outlet } from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="app">
      <Header />
      <div>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default App;
