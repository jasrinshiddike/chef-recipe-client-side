import { createBrowserRouter, Navigate } from 'react-router-dom';
import Main from '../layout/Main';
import Chef from '../pages/ChefDetail/Chef/Chef';
import ChefLayout from '../layout/ChefLayout';
import LoginLayout from '../layout/LoginLayout';
import ChefSection from '../pages/Home/ChefSection/ChefSection';
import Login from '../pages/Login/Login/Login';
import Register from '../pages/Login/Register/Register';
import PrivateRoute from './PrivateRoute';
import NotFound from '../pages/NotFound/NotFound';
import Blog from '../pages/Blog/Blog';



const router = createBrowserRouter([
    
    {
    
        path: '/',
        element: <LoginLayout />,
        children: [
            {
                path: '/',
                element: <Navigate to="/chef"></Navigate>
            },
            {
                path: 'login',
                element: <Login />
            },
            {
                path: 'register',
                element: <Register />
            },
            {
                path: 'blog',
                element: <Blog />
            }
            
        ]
    },
    {
        path: 'chef',
        element: <Main />,
        children: [
            {
                path: '/chef',
                element: <ChefSection />
            }
        ]
    },
    {
        path: 'chefs',
        element: <ChefLayout />,
        children: [
            
            {
                path: ':id',
                element: <PrivateRoute><Chef /></PrivateRoute>,
                loader: ({params}) => fetch(`https://b7a10-chef-recipe-hunter-server-side-jasrinshiddike.vercel.app/chefs/${params.id}`)
            }
        ]
    },
    {
        path: '*',
        element: <NotFound />
    }
])

export default router;