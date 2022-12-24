import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home";
import Algebra from "./pages/Algebra";
import Geometry from "./pages/Geometry";
import Calculus from "./pages/Calculus";

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
