import React from 'react'
import {createHashRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom'
import AppLayout from '../layouts/AppLayout'
import Home from '../pages/Home'
import NotFound from '../pages/NotFound'
import Contacts from '../pages/Contacts'
import Blog from '../pages/Blog'
import Article from '../pages/Article'
import Login from '../pages/Login'

const router = createHashRouter(
    createRoutesFromElements(
        <Route path="/" element={<AppLayout />}>
            <Route index element={<Home />}/>
            <Route path="contacts" element={<Contacts/>} />
            <Route path="article" element={<Blog/>} />
            <Route path="article/:articleId" element={<Article />}/>
            <Route path="login" element={<Login/>} />
            <Route path="*" element={<NotFound />} />
        </Route>
    )
)

const AppRouter = () => {
    return <RouterProvider router={router} />
};

export default AppRouter;

