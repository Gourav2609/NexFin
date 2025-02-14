import React from "react";
import Home from "./pages/home";
import Header from "./components/header";
import "./App.css";
import {
  createBrowserRouter,
  ScrollRestoration,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import Hero from "./components/hero";
import Steps from "./components/steps";
import Footer from "./components/Footer";
import PayTable from "./pages/PayTable";

const Layout = () => {
  return (
    <div>
      <Header />
      <ScrollRestoration />
      <Outlet />
      <Footer />
    </div>
  );
};

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/paytable",
        element: <PayTable />,
      },
    ],
  },
]);

const App = () => {
  return (
    <div className=" font-bodyFont">
      <RouterProvider router={Router} />
    </div>
  );
};

// const App = () => {
//   return (
//     <div>
//       <Header />
//       {/* <Home /> */}
//       <PayTable />
//       <Footer />
//     </div>
//   );
// };
export default App;
