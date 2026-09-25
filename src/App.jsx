import { useState } from "react";
import heroImg from "./assets/hero.png";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout/Layout";
import Home from "./Pages/Home/Home";
import Blog from "./Pages/Blog/Blog";
import Blogdetails from "./Pages/Blogdetails/Blogdetails";
import Notfound from "./Pages/Notfound/Notfound";
import Navbar from "./Components/Navbar/Navbar";
import About from "./Pages/About/About";

let x = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "blog", element: <Blog /> },
      { path: "blog/:slug", element: <Blogdetails /> },

      { path: "*", element: <Notfound /> },
    ],
  },
]);

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <RouterProvider router={x}></RouterProvider>
    </>
  );
}

export default App;
