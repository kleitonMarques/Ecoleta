
import React from 'react'
import { Route, BrowserRouter } from 'react-router-dom'

import Home from './pages/Home/index'
// import CreatePoint from './pages/CreatePoint/index'

const Routes = () => {
    return (
        <BrowserRouter>
            <Route component={Home} path="/" />
        </BrowserRouter>
    )
}

export default Routes