import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ChoiceProvider } from "./contexts/ChoiceContext";

import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <ChoiceProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ChoiceProvider>
);
