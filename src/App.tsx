import SeriesList from "./pages/seriesList/SeriesList";
import "./app.scss";
import "@fontsource/source-sans-3";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Outlet />
    </div>
  );
}

export default App;
