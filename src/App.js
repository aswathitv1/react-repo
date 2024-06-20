import React, { Suspense, lazy } from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'
import Header from './components/molecules/Header'
import Footer from './components/molecules/Footer'
import Body from './components/molecules/Body'
import Error from './components/molecules/Error'
import About from './components/molecules/About'
import Contact from './components/molecules/Contact'
import RestMenu from './components/atoms/RestMenu'
import Shimmer from './components/atoms/Shimmer'
import UserContext from './utils/UserContext'
import { Provider } from 'react-redux'
import appStore from './utils/appStore'
import Cart from './components/atoms/Cart'

const AppLayout = () => {
    return(
        <Provider store = {appStore}>
            <UserContext.Provider value={{user:'Aswathi'}}>
                <div className="app">
                    <Header />
                    <Outlet />
                    {/* <Footer /> */}
                </div>
            </UserContext.Provider>
        </Provider>
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
                element:<RestMenu />
            },
            {
                path:'/cart',
                element:<Cart />
            }
        ]
    }
])

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<RouterProvider router={appRouter} />)