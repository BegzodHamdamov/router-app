import "./Mobile.css"
import React from 'react'
import Container from "../../containers/Container";
import { Link } from "react-router-dom";

const mobile = [
    {
        img: "https://apollo-olx.cdnvideo.ru/v1/files/ei8n3q1a9x1t2-UZ/image;s=1000x700",
        title: "Samsung S9 64GB", price: "It is 195.e.", location: "Tashkent, Yunusabad area at night 16:08",

    },
    {
        img: "https://apollo-olx.cdnvideo.ru/v1/files/t0jh8lvsh46i3-UZ/image;s=516x361",
        title: "Samsung Galaxy S10 128GB", price: "It is 195.e.", location: "Tashkent, Yunusabad area at night 16:08",
    },
    {
        img: "https://apollo-olx.cdnvideo.ru/v1/files/t0jh8lvsh46i3-UZ/image;s=516x361",
        title: "Samsung Galaxy S10 128GB", price: "It is 195.e.", location: "Tashkent, Yunusabad area at night 16:08",
    },
    {
        img: "https://apollo-olx.cdnvideo.ru/v1/files/t0jh8lvsh46i3-UZ/image;s=516x361",
        title: "Samsung Galaxy S10 128GB", price: "It is 195.e.", location: "Tashkent, Yunusabad area at night 16:08",
    },
    {
        img: "https://apollo-olx.cdnvideo.ru/v1/files/ei8n3q1a9x1t2-UZ/image;s=1000x700",
        title: "Samsung S9 64GB", price: "It is 195.e.", location: "Tashkent, Yunusabad area at night 16:08",

    },
    {
        img: "https://apollo-olx.cdnvideo.ru/v1/files/t0jh8lvsh46i3-UZ/image;s=516x361",
        title: "Samsung Galaxy S10 128GB", price: "It is 195.e.", location: "Tashkent, Yunusabad area at night 16:08",
    },
    {
        img: "https://apollo-olx.cdnvideo.ru/v1/files/t0jh8lvsh46i3-UZ/image;s=516x361",
        title: "Samsung Galaxy S10 128GB", price: "It is 195.e.", location: "Tashkent, Yunusabad area at night 16:08",
    },
    {
        img: "https://apollo-olx.cdnvideo.ru/v1/files/t0jh8lvsh46i3-UZ/image;s=516x361",
        title: "Samsung Galaxy S10 128GB", price: "It is 195.e.", location: "Tashkent, Yunusabad area at night 16:08",
    },
]

const Mobile  = () => {
    return (
        <Container>
            <div className="container">
                <h1>Mobil app</h1>
                <div className="row">
                    {mobile.map(v =>
                        <div className="col-sm-6 col-md-4 p-3 d-f">
                            <div className="d-flex m-3"><img className="imgs" src={v.img} />
                                <div className="m-3"><p className="color-red">{v.title}</p> <strong>{v.price}</strong> {v.location}</div></div>
                        </div>)}
                </div>
            </div>
        </Container>
    )
}

export default Mobile;





