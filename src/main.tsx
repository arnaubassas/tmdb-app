import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import SeriesList from "./pages/seriesList/SeriesList.tsx";
import DetailSerie from "./pages/detailSerie/DetailSerie.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <React.StrictMode>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/" element={<Navigate to="/popular" replace />} />
          <Route path="/:list" element={<SeriesList />} />
          <Route path="/serie/:id" element={<DetailSerie />} />
        </Route>
      </Routes>
    </React.StrictMode>
  </BrowserRouter>
);
