import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import Root from "./components-collection/pages/Root.component";

import "./index.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import Dashboard from "./components-collection/pages/Dashboard.component";
import Body from "./components-collection/pages/Body.component";
import Mind from "./components-collection/pages/Mind.component";
import Other from "./components-collection/pages/Other.component";
import Tools from "./components-collection/pages/Tools.component";
import Reset from "./components-collection/pages/Reset.component";
import "./index.css";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<Dashboard />}></Route>
      <Route path="body" element={<Body />}></Route>
      <Route path="mind" element={<Mind />}></Route>
      <Route path="other" element={<Other />}></Route>
      <Route path="tools" element={<Tools />}></Route>
      <Route path="reset" element={<Reset />}></Route>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
