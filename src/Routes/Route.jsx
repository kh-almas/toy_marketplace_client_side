import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main.jsx";
import Home from "../Pages/Home/Home.jsx";
import Registration from "../Pages/Registration/Registration.jsx";
import Login from "../Pages/Login/Login.jsx";
import CreateToy from "../Pages/AddToys/CreateToy.jsx";
import PrivateRoute from "./PrivateRoute.jsx";
import Mytoy from "../Pages/MyToys/Mytoy.jsx";
import AllToy from "../Pages/AllToys/AllToy.jsx";
import UpdateToy from "../Pages/UpdateToy/UpdateToy.jsx";
import Blog from "../Pages/Blog/Blog.jsx";
import NotFound from "../Pages/NotFound/NotFound.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        errorElement: <NotFound />,
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
            {
                path: '/all-toys',
                element: <AllToy />
            },
            {
                path: '/single-toy/:id',
                element: <PrivateRoute><UpdateToy /></PrivateRoute>
            },
            {
                path: '/blog',
                element: <Blog />
            },
        ]
    },
]);

export default router;