import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import Register from "../pages/Register/Register";
import SignIn from "../pages/SignIn/SignIn";
import JobDetails from "../pages/JobDetails/JobDetails";
import PrivateRouter from "./PrivateRouter";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <h2>Router not Found</h2>,
    children: [
        {
            path: '/',
            element: <Home />
        },
        {
            path: '/jobs/:id',
            element: <PrivateRouter> <JobDetails /></PrivateRouter>,
            loader: ({params}) =>fetch(`http://localhost:5000/jobs/${params.id}`)
            
        },
        {
            path: 'register',
            element: <Register />
        },
        {
            path: 'signIn',
            element: <SignIn />
        },
    ]
  },
]);

export default router;
