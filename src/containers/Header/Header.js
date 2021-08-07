
import React from 'react'
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from '../../redux/actions';
import HeaderWrapper from './HeaderWrapper'


let menu = [
    { to: "/", title: "Home" },
    { to: "/mobileapps", title: "Mobil app" },
    { to: "/Product", title: "Product" },
    // { to: "/help", title: "Help" },
    
    

]

const Header = () => {
  
    const theme = useSelector(state => state.theme);
    console.log(theme);

    const dispatch = useDispatch();
    const toggle = () => dispatch(toggleTheme())
    return (
     <HeaderWrapper className={`shadow mb-3 ${theme}`}>
            
        <header className={`shadow mb-3 mt-0`}>
            <div className="container py-3 d-flex justify-content-between align-items-center">
                <div>
                    {menu.map((item, value) => <Link to={item.to} key={item.to} className="me-3 btn text-white">{item.title}</Link>)}
                </div>
              <Button onClick={toggle} color={theme}>{theme == "dark" ? "Day" : "Night"}</Button>
            </div>
        </header>
        </HeaderWrapper>
    )
}

export default Header