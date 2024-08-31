import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import store from "./store/store.js";
import { AuthLayout, ErrorPage } from "./components/index.js";
import {
  Home,
  AllPosts,
  AddPost,
  Signin,
  Signup,
  Post,
  EditPost,
} from "./pages/export.js";

const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      { path: "home", element: <Home /> },
      { path: "signin", element: <Signin /> },
      { path: "signup", element: <Signup /> },
      { path: "allposts", element: <AllPosts /> },
      { path: "editpost/:slug", element: <EditPost /> },
      { path: "addpost", element: <AddPost /> },
      { path: "post/:slug", element: <Post /> },
    ],
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
];

const router = createBrowserRouter(routes);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}>
        <App />
      </RouterProvider>
    </Provider>
  </React.StrictMode>
);
