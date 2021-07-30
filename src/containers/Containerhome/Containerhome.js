import "./Containerhome.css"
import React from 'react'

const bases = [
    {
        img: "https://apollo-olx.cdnvideo.ru/v1/files/c7s60wwnbxff2-UZ/image;s=1000x700",
        title: "PENABLOK rasiyadan olib keltirilgan оборудование",
        price: "8 490 у.е.",
        location: "Toshkent, Mirzo-Ulug‘bek tumani 28 iyul",
    },
    {
        img: "https://apollo-olx.cdnvideo.ru/v1/files/5m1a78ggor12-UZ/image;s=644x461",
        title: "Вытяжные вентиляторы для птицефабрик и теплиц",
        to: "",
        to: "",
        price: "8 490 у.е.",
        location: "Toshkent, Olmazor tumani Kecha 14:11",
    },
    {
        img: "https://apollo-olx.cdnvideo.ru/v1/files/w79oqqynqv5r3-UZ/image;s=644x461",
        title: "Баннер тент банер установка оптм нархларда",
        price: "8 490 у.е.",
        location: "Toshkent, Mirzo-Ulug‘bek tumani 28 iyul",
    },
    {
        img: "https://apollo-olx.cdnvideo.ru/v1/files/49o4dvwhutbv3-UZ/image;s=644x461",
        title: "Продается Евро дом Шахристанская УзГазоил",
        price: "8 490 у.е.",
        location: "Toshkent, Mirzo-Ulug‘bek tumani 28 iyul",
    },
    {
        img: "https://apollo-olx.cdnvideo.ru/v1/files/c7s60wwnbxff2-UZ/image;s=1000x700",
        title: "PENABLOK rasiyadan olib keltirilgan оборудование",
        price: "8 490 у.е.",
        location: "Toshkent, Mirzo-Ulug‘bek tumani 28 iyul",
    },
    {
        img: "https://apollo-olx.cdnvideo.ru/v1/files/5m1a78ggor12-UZ/image;s=644x461",
        title: "Вытяжные вентиляторы для птицефабрик и теплиц",
        price: "8 490 у.е.",
        location: "Toshkent, Olmazor tumani Kecha 14:11",
    },
    {
        img: "https://apollo-olx.cdnvideo.ru/v1/files/nfqwgdo7n20o1-UZ/image;s=644x461",
        title: "Баннер тент банер установка оптм нархларда",
        price: "8 490 у.е.",
        location: "Toshkent, Mirzo-Ulug‘bek tumani 28 iyul",
    },
    {
        img: "https://apollo-olx.cdnvideo.ru/v1/files/49o4dvwhutbv3-UZ/image;s=644x461",
        title: "Продается Евро дом Шахристанская УзГазоил",
        price: "8 490 у.е.",
        location: "Toshkent, Mirzo-Ulug‘bek tumani 28 iyul",
    },



]

const Containerhome = () => {
    return (
        <div className="body-container">
            <h1 className="ad">Primium Ads</h1>
            <div className="row">
                {bases.map(v =>
                    <div className="col-sm-6 col-md-3">
                        <div className="product shadow rounded overflow-hidden p-2">
                            <img src={v.img} className="w-100 mb-4" alt="" />
                            <p>{v.title}</p>
                            <span>{v.price}</span> <br />
                            <span>{v.location}</span>
                        </div>
                    </div>)
                }
            </div>
        </div>
    )
}

export default Containerhome;
