import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Songs from "./components/pages/SongsPage.tsx";
import AlbumsPage from "./components/pages/AlbumsPage.tsx";
import ArtistsPage from "./components/pages/ArtistsPage.tsx";
import GenresPage from "./components/pages/GenresPage.tsx";
import { Provider } from "react-redux";
import { store } from "./store/store.ts";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Provider store={store}>
        <App />
      </Provider>
    ),
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
