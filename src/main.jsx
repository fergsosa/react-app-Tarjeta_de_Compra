import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
// import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { store } from "./stores";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);

// Si quieres empezar a medir el rendimiento de tu aplicación, pasa una función
// para registrar los resultados (por ejemplo: reportWebVitals(console.log))
// o enviar a un punto final de análisis. Más información: https://bit.ly/CRA-vitals//
// reportWebVitals();
