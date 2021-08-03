import "./Category.css"
import React from 'react'
import Container from "../../containers/Container";
import datas from "../../data";
import { useParams } from "react-router-dom";
import { BiArrowBack, IconName } from "react-icons/bi";

console.log(datas);

const Category = () => {
    const { category } = useParams();
    console.log(category);
    const obj = datas.filter(v => v.category == category)[0];
    const data = obj.data;
    console.log(obj);
    console.log(data);

   

    return (
        <Container>
            <div className="container">
               
                <h1>    Category: {category}</h1>
                <div className="row">
                    {data.map(v =>
                        <div className="for-category">
                            <div className="products shadow rounded overflow-hidden p-2">
                                 <img src={v.img} className=" mb-4" alt="" />
                               <div className="info">
                                <p className="p">{v.title}</p> <br/>                                </div>
                               <div className="bot"> <span className="local">{v.location}</span>
                               <span className="price">{v.price}</span>
                            
                               
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





