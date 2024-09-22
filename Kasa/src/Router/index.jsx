import { createBrowserRouter } from "react-router-dom";
import { Home } from "../pages/Home";
import { Logement } from "../pages/Logement";
import { About }  from "../pages/About";
import { Error } from "../pages/Error";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />
    },
    {
        path:"/logement/:logementId",
        element: <Logement />
    },
    {
        path: "/about",
        element: <About />

    },
    {
        path: "*",
        element: <Error />
    },
])

export default router;