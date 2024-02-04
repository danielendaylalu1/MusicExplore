import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Songs from "./components/Songs.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Songs />,
      },
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
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />
);
