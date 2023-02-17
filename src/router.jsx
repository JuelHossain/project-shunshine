import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import NotFound from "./components/erros/NotFound";
import About from "./pages/about/About";
import Login from "./pages/auth/login/Login";
import Register from "./pages/auth/register/Register";
import Contact from "./pages/contact/Contact";
import Home from "./pages/home/Home";

const router = [
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
];
export default createBrowserRouter(router);
