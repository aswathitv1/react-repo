import React from 'react'
import ReactDOM from 'react-dom'
import Header from './components/molecules/Header'
import Footer from './components/molecules/Footer'

const AppLayout = () => {
    return(
        <div classname="app">
            <Header />
            <Footer />
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<AppLayout />)