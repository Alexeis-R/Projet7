import React from "react";
import ReactDOM from "react-dom/client";
import {RourterProvider} from "react-router-dom";
import { Router } from "./Router";

import "./index.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} /> 
    </React.StrictMode>
);