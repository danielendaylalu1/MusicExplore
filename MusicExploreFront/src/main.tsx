import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "albums",
        element: <div>albums</div>,
      },
      {
        path: "artists",
        element: <div>artists</div>,
      },
      {
        path: "genres",
        element: <div>genres</div>,
      },
      {
        path: "addsong",
        element: <div>add</div>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
