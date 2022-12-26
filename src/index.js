import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./Pages/ErrorPage";
import Home from "./Pages/Home";
import Algebra from "./Pages/Algebra";
import Geometry from "./Pages/Geometry";
import Calculus from "./Pages/Calculus";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/home",
        element: <Home />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/algebra",
        element: <Algebra />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/geometry",
        element: <Geometry />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/calculus",
        element: <Calculus />,
        errorElement: <ErrorPage />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
