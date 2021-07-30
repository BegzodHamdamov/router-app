import "./Page404.css"

import React from 'react'
import { Link } from "react-router-dom"

const Page404 = () => {
    return (
        <div className="page404 p-3">
            <h1>404 Error</h1>
            <Link to="/" className="btn btn-dark text-white">Home</Link>
        </div>
    )
}

export default Page404;
