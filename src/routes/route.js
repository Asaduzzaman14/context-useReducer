import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import About from "./About";
import Cart from "./Cart";
import Home from "./Home";
import TopRated from "./TopRated";




const routes = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "about",
                element: <About />,
            },
            {
                path: "top-rated",
                element: <TopRated />,
            },
            {
                path: "cart",
                element: <Cart />,
            },
        ],
    },
]);

export default routes;