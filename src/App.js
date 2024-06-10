import React, { Suspense, lazy } from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'
import Header from './components/molecules/Header'
import Footer from './components/molecules/Footer'
import Body from './components/molecules/Body'
import Error from './components/molecules/Error'
import About from './components/molecules/About'
import Contact from './components/molecules/Contact'
import RestCard from './components/atoms/RestCard'
import Shimmer from './components/atoms/Shimmer'

const AppLayout = () => {
    return(
        <div className="app">
            <Header />
            <Outlet />
            <Footer />
        </div>
    )
}

const Grocery = lazy(()=>import('./components/molecules/Grocery'))

const appRouter = createBrowserRouter([
    {
        path:'/',
        element:<AppLayout />,
        errorElement:<Error />,
        children: [
            {
                path:'/',
                element:<Body />
            },
            {
                path:'/about',
                element:<About />
            },
            {
                path:'/contact',
                element:<Contact />
            },
            {
                path:'/grocery',
                element: <Suspense fallback={<Shimmer />}><Grocery /></Suspense>
            },
            {
                path:'/restaurants/:id',
                element:<RestCard />
            }
        ]
    }
])

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<RouterProvider router={appRouter} />)