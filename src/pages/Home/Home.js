import "./Home.css"
import React from 'react'
import Container from "../../containers/Container";
import { Link } from "react-router-dom";
import { InputGroup, InputGroupAddon, InputGroupText, Input, Button } from 'reactstrap';
import { FiSearch, IconName } from "react-icons/fi";
import Containerhome from "../../containers/Containerhome/Containerhome";
import HomeTheme from "./HomeTheme";
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from '../../redux/actions';

const categories = [
    {
        icon: "https://categories.olxcdn.com/assets/categories/olxuz/detskiy-mir-36-2x.png",
        backColor: "rgb(255, 206, 50)",
        title: "Детский мир",
        to: "detskiy-mir"
    },
    {
        icon: "https://categories.olxcdn.com/assets/categories/olxuz/nedvizhimost-1-2x.png",
        backColor: "#3a77ff",
        title: "Estate",
        to: "estate"
    },
    {
        icon: "https://categories.olxcdn.com/assets/categories/olxuz/transport-3-2x.png",
        backColor: "rgb(35, 229, 219)",
        title: "Транспорт",
        to: "transport"
    },

    {
        icon: "https://categories.olxcdn.com/assets/categories/olxuz/rabota-6-2x.png",
        backColor: "rgb(255, 86, 54)",
        title: "Work",
        to: "work"
    },
    {
        icon: "https://categories.olxcdn.com/assets/categories/olxuz/uslugi-7-2x.png",
        backColor: "rgb(255, 214, 201)",
        title: "Services",
        to: "services"
    },
    {
        icon: "	https://categories.olxcdn.com/assets/categories/olxuz/hobbi-otdyh-i-sport-903-2x.png",
        backColor: "rgb(206, 221, 255)",
        title: "Hobbies",
        to: "hobbis"
    },
    {
        icon: "	https://categories.olxcdn.com/assets/categories/olxuz/elektronika-37-2x.png",
        backColor: "rgb(200, 248, 246)",
        title: "Elektr tools",
        to: "elektrs"
    },
    {
        icon: "	https://categories.olxcdn.com/assets/categories/olxuz/obmen-barter-1153-2x.png",
        backColor: "rgb(255, 214, 201)",
        title: "Changes",
        to: "changes"
    },
    {
        icon: "https://categories.olxcdn.com/assets/categories/olxuz/zhivotnye-35-2x.png",
        backColor: "rgb(206, 221, 255)",
        title: "Animals",
        to: "animals"
    },

]


const Home = () => {
    const theme = useSelector(state => state.theme);
    console.log(theme);

    const dispatch = useDispatch();
    const toggle = () => dispatch(toggleTheme())

       return (
        <Container>
        <HomeTheme className={`shadow mb-3 ${theme}`}>

        <div className="container py-5">
            
        
        
                 <div className="task">
                  <Input className="p-3 vf" placeholder="756 839 objects">
                      
                  </Input>
                  <Button><FiSearch /></Button>
                 </div>
        
        
              <h1 className="text-center">Main Categories</h1>
              {categories.map(v =>
                  <Link to={v.to} key={v.to} className="category">
                      <div className="icon" style={{ backgroundColor: v.backColor }}>
                          <img src={v.icon} alt="" />
                      </div>
                      {v.title}
                  </Link>)
              }
          </div>
          
          <Containerhome />

        </HomeTheme>
        </Container>
    )
}

export default Home;