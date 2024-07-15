import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SeriesList from "./pages/seriesList/SeriesList.tsx";
import DetailSerie from "./pages/detailSerie/DetailSerie.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <React.StrictMode>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<SeriesList />} />
          <Route path="/serie/:id" element={<DetailSerie />} />
        </Route>
      </Routes>
      <App />
    </React.StrictMode>
  </BrowserRouter>
);
