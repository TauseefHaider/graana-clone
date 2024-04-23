import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import LandingPage from "./pages/LandingPage.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout.jsx";
import BuyResidential from "./pages/BuyResidential.jsx";
import BuyCommercial from "./pages/BuyCommercial.jsx";
import BuyPlot from "./pages/BuyPlot.jsx";
import RentCommercial from "./pages/RentCommercial.jsx";
import RentResidential from "./pages/RentResidential.jsx";
import SellProperty from "./pages/SellProperty.jsx";
import RentProperty from "./pages/RentProperty.jsx";

const router = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <LandingPage />,
      },
      {
        path: "buy/residential",
        element: <BuyResidential />,
      },
      {
        path: "buy/commercial",
        element: <BuyCommercial />,
      },
      {
        path: "buy/plot",
        element: <BuyPlot />,
      },
      {
        path: "rent/residential",
        element: <RentResidential />,
      },
      {
        path: "rent/commercial",
        element: <RentCommercial />,
      },
      {
        path: "sell/property",
        element: <SellProperty />,
      },
      {
        path: "rent/property",
        element: <RentProperty />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
