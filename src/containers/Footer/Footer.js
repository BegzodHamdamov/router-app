import "./Footer.css"
import React from 'react'
import { Link } from "react-router-dom"
import FooterTheme from "./FooterTheme"
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from '../../redux/actions';

let menu = [
    { to: "/mobileapps", title: "Mobile app" },
    { to: "/help", title: "Help" },
    { to: "/paidserveces", title: "Paid services" },
    { to: "/busines", title: "OLX-business" },

]
let menu1 = [
    { to: "/team of", title: "Terms of use" },
    { to: "/privacy", title: "Privacy policy" },
    { to: "/how to buy", title: "How to buy and sell?" },
    { to: "/safety", title: "Safety rules" },

]

let menu2 = [
    { to: "/g", 
      img: ""},
    { to: "/safety", img: "Safety rules" },

]
const Footer = () => {

    const theme = useSelector(state => state.theme);
    console.log(theme);

    const dispatch = useDispatch();
    const toggle = () => dispatch(toggleTheme())
    return (

      <FooterTheme className={`shadow mb-3 ${theme}`}>

            <footer className=" text-white">
            <div className="container py-3">
                <a href="#"><h1>Auxiliary</h1></a>
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
                    <div className="col-md-4"><div>
                    {menu2.map(value =>
                            <Link to={value.to} key={value.to}>{value.img}</Link>)}
                        </div>
                    </div>
                </div>
            </div>
        </footer>
      </FooterTheme>
    )
}

export default Footer;