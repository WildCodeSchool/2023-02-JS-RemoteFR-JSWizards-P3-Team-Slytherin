import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ChoiceProvider } from "./contexts/ChoiceContext";
import { UserProvider } from "./contexts/UserContext";
import { WorkshopProvider } from "./contexts/WorkshopContext";

import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <UserProvider>
      <WorkshopProvider>
        <ChoiceProvider>
          <App />
        </ChoiceProvider>
      </WorkshopProvider>
    </UserProvider>
  </BrowserRouter>
);
