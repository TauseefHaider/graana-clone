import React from "react";

import ReactDOM from "react-dom/client";

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
import CardsDetails from "./pages/CardsDetails.jsx";
import ListRentHome from "./pages/ListRentHome.jsx";
import SearchCards from "./components/SearchCards.jsx";

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
      {
        path: "details/:id",
        element: <CardsDetails />,
      },
      {
        path: "list/home",
        element: <ListRentHome />,
      },
      {
        path: ":type/:search",
        element: <SearchCards />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
