import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";


import announceLoader from "./services/announceLoader";
import announceIdLoader from "./services/announceIdLoader";
import announceEditAction from "./services/announceEditAction";


import App from "./App";
import Announce from "./pages/Announce"
import EditAnnounce from "./pages/EditAnnounce";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "announce/:id/edit",
        element: <EditAnnounce />,
        loader: announceIdLoader,
        action: announceEditAction,
      },
      {
        path: "announce", 
        element: <Announce />,
        loader: announceLoader, 
      },

    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
