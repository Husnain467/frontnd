import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap";
import App from "./App";
import { BrowserRouter as Router  } from "react-router-dom";
import { CarAdsProvider } from "./components/CarAdsContext";
import { SparePartProvider } from "./components/partscontext";
import { InspectionProvider } from "./components/InspectionContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
   <CarAdsProvider>
      <SparePartProvider>
         <InspectionProvider>
     <Router>
  <App />
 </Router>
 </InspectionProvider>
 </SparePartProvider>
    </CarAdsProvider> 
 
);