import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main.jsx";
import Home from "../Pages/Home/Home.jsx";
import Registration from "../Pages/Registration/Registration.jsx";
import Login from "../Pages/Login/Login.jsx";
import CreateToy from "../Pages/AddToys/CreateToy.jsx";
import PrivateRoute from "./PrivateRoute.jsx";
import Mytoy from "../Pages/MyToys/Mytoy.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        errorElement: <p>there have some error</p>,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/registration',
                element: <Registration />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/create-toy',
                element: <PrivateRoute><CreateToy /></PrivateRoute>
            },
            {
                path: '/my-toys',
                element: <PrivateRoute><Mytoy /></PrivateRoute>
            },
        ]
    },
]);

export default router;