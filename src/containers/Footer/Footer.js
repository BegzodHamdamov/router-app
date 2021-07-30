import "./Footer.css"
import React from 'react'
import { Link } from "react-router-dom"

let menu = [
    { to: "/mobileapps", title: "Mobile app" },
    { to: "/help", title: "Help" },
    { to: "/features", title: "Paid services" },
    { to: "/busines", title: "OLX-business" },

]
let menu1 = [
    { to: "/team of", title: "Terms of use" },
    { to: "/privacy", title: "Privacy policy" },
    { to: "/how to buy", title: "How to buy and sell?" },
    { to: "/safety", title: "Safety rules" },

]

const Footer = () => {
    return (
        <footer className="bg-dark text-white">
            <div className="container py-5">
                <h1>Footer</h1>
                <div class="row">
                    <div className="col-md-4"><div>
                        {menu.map(value =>
                            <Link to={value.to} key={value.to}>{value.title}</Link>)}
                    </div></div>
                    <div className="col-md-4">
                        {menu1.map(value =>
                            <Link to={value.to} key={value.to}>{value.title}</Link>)}
                        <div></div>
                    </div>
                    <div className="col-md-4">

                        <div></div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;