import React from 'react'
import {createHashRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom'
import AppLayout from '../layouts/AppLayout'
import Article from '../pages/Article'
import Blog from '../pages/Blog'
import Home from '../pages/Home'

const router = createHashRouter(
    createRoutesFromElements(
        <Route path="/" element={<AppLayout />}>
            <Route index element={<Home />}/>
            <Route path="blog" element={<Blog/>} />
            <Route path="blog/article" element={<Article/>} />
            {/* <Route path="*" element={<NotFound />} loader={() => <Preloader />} /> */}
        </Route>
    )
)

const AppRouter = () => {
    return <RouterProvider router={router} />
};

export default AppRouter;

