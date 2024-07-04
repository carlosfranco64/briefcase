import React from "react";
import ReactDOM from "react-dom/client";
import { BriefcaseApp } from "./BriefcaseApp.jsx";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
// import "./App.css";
import "primereact/resources/themes/lara-light-cyan/theme.css";
import { PrimeReactProvider,  } from 'primereact/api';
import PrimeReact from 'primereact/api';
import { AllProvider } from "./context/AllContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>

<AllProvider>

    <BrowserRouter>
     <PrimeReactProvider>
      <BriefcaseApp />
       </PrimeReactProvider>
    </BrowserRouter>
</AllProvider>
  </React.StrictMode>
);
 