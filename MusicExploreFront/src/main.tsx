import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Songs from "./components/Songs.tsx";
import AlbumsPage from "./components/AlbumsPage.tsx";
import ArtistsPage from "./components/ArtistsPage.tsx";
import GenresPage from "./components/GenresPage.tsx";

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
        element: <AlbumsPage />,
      },
      {
        path: "artists",
        element: <ArtistsPage />,
      },
      {
        path: "genres",
        element: <GenresPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />
);
