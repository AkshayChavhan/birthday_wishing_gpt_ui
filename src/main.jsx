import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import {
  BirthdayUserForm,
  LandingPage,
  LyricsPanel,
  RegistrationForm,
  SongSelectionForm,
} from "./component/index.js";
import { UserContextProvider } from "./component/UserDetailContext.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,  
  },
  {
    path: "/register",
    element: <RegistrationForm />,  
  },
  {
    path: "/birthday-user",
    element: <BirthdayUserForm />, 
  },
  {
    path: "/song-selection",
    element: <SongSelectionForm />,  
  },
  {
    path: "/get-lyrics",
    element: <LyricsPanel />, 
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UserContextProvider>
      <RouterProvider router={router} />
      <App />
    </UserContextProvider>
  </React.StrictMode>
);
