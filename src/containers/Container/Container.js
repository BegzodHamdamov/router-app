import "./Container.css";
import Header from "../Header"
import Footer from "../Footer"
import Containerhome from "../Containerhome/Containerhome";
import React from 'react'

const Container = (props) => {
    return (
        <>
            <Header />
            <div className="content">
                {props.children}
            </div>
            {/* < Containerhome /> */}
            <Footer />
        </>
        
    )
}

export default Container;