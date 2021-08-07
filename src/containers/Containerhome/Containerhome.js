import "./Containerhome.css"
import React from 'react'
import { Button } from "reactstrap"
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from '../../redux/actions';
import ContTheme from "./ContTheme"

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
        img: "https://apollo-olx.cdnvideo.ru/v1/files/0v7ge6rw1xsb-UZ/image;s=644x461",
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
        img: "https://apollo-olx.cdnvideo.ru/v1/files/zyhnerjg5n4b1-UZ/image;s=644x461",
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

    
    const theme = useSelector(state => state.theme);
    console.log(theme);

    const dispatch = useDispatch();
    const toggle = () => dispatch(toggleTheme())
    return (
       <ContTheme className={`shadow ${theme}`}>

        <div className="body-container">
            <h1 className="ad">Primium Adds</h1>
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
            <div className="all"><Button className="btn btn-white"><h6 >Hammasini ko'rsatish</h6></Button></div>
            <section>
                <div className="mid">
                    <img src="	https://static.olx.uz/static/olxuz/packed/font/2fbd23c39bff0aee6c0c84aaf60e66347d.svg"/>
                    <h4>Olx bilan internetda biznesingizni boshlang</h4>
                    <span>Batafsil</span>
                </div>
               <div className="olx1 text-center">
               <div>
                    <h1><b>Olx</b></h1>
                </div>

                <div className="p">
                    <p className="w">
                    Oʻzbekistonda 1-raqamli eʼlonlar servisi
Oʻzbekiston xususiy eʼlonlari OLX (avvalgi torg.uz) – bu yerda izlaganingizni topasiz.
"Eʼlon joylashtirish" tugmasiga bosib, siz istalgan mavzuga oid onlayn-eʼlonni joylashtira olasiz – ish qidirish, xizmat koʻrsatish, avtomobillar, koʻchmas mulk, elektronika va boshqalar savdosi.
OLX Oʻzbekiston servisi yordamida siz deyarli barcha istagan narsangizni sotish yoki sotib olishingiz mumkin. Qidiruv funksiyasidan foydalanib, oʻzingizni qiziqtirgan mavzuga oid sersisda mavjud eʼlonlarni hech bir qiyinchiliksiz topa olasiz.
OLX Oʻzbekiston – sizning ishonchli va tengi yoʻq yordamchingiz.
                    </p>
                </div>
               </div>
               <div className="note">
                   <img src="https://static.olx.uz/static/olxuz/packed/font/2fc1ef4e9c6a6dc640b6feb727836fabc7.svg"/>
                   <p>OLX servisining boʻlimlari: Bolalar dunyosi, Ko'chmas mulk, Transport, Ish, Hayvonlar, Uy va bog', Elektr jihozlari, Xizmatlar, Moda va stil, Xobbi, dam olish sport, Tekinga beraman, Ayirboshlash</p>
               </div>
            </section>
        </div>
       </ContTheme>
    )
}

export default Containerhome;
