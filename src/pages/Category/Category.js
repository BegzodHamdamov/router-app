import "./Category.css"
import React from 'react'
import Container from "../../containers/Container";
// import datas from "../../data";
import { Redirect, useParams } from "react-router-dom";
import { useSelector } from "react-redux";


const Category = () => {

    const { category } = useParams();

    const data = useSelector(state => state.data[category]);


    // const filterData= datas.filter(v => v.category == category);
    // const obj =filterData.length > 0 ? filterData[0] : {};
    // const data = obj.data;
   
    return (
        <Container>
            { !data && <Redirect to="/page404" />}
            <div className="container">
               
                <h1> Category: {category}</h1>
                <div className="row">
                    {data?.map(v =>
                        <div className="for-category">
                            <div className="products shadow rounded overflow-hidden p-2">

                              <img src={v.img} className="imgs" alt="" />    
                              <div className="info">
                              <div className="titles">{v.title}</div>
                              <div className="charges">{v.price}</div>
                              <div className="locs"> {v.location}</div>
                              </div>
                                                   
                            </div>
                       </div>)
                    }
                </div>
            </div>
        
        </Container>

    )
}

export default Category;





