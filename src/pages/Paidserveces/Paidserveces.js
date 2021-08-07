import "./Paidserveces.css"
import React from 'react'
import Container from "../../containers/Container";
// import { Link } from "react-router-dom";

const paidserveces = [


    {
        titles: "",
        top: "Мой профиль / Mening profilim", 
        price: "Регистрация профиля", 
        location: "Настройки профиля, 16:08",
        poster: "",

    },
    {
        titles: "",
        top: "Мой профиль / Mening profilim", 
        price: "Регистрация профиля", 
        location: "Настройки профиля, 16:08",
        poster: "",

    },
    {
        titles: "",
        top: "Мой профиль / Mening profilim", 
        price: "Регистрация профиля", 
        location: "Настройки профиля, 16:08",
        poster: "",

    },
    {
        titles: "",
        top: "Мой профиль / Mening profilim", 
        price: "Регистрация профиля", 
        location: "Настройки профиля, 16:08",
        poster: "",

    },

]

const Paidserveces = () => {
    return (
        <Container>
            <div className="container-help">
                <h1>Paid serveces</h1>
                <div className="row">
                    {paidserveces.map(v =>
                        <div className="col-sm-6 p-3 poster">
                            <div className="d-flex"> {v.titles}
                                <div className="m-3"><p className="color-red">{v.top}</p> <strong>{v.price}</strong> {v.location} {v.poster}</div></div>
                        </div>)}
                </div>
            </div>
        </Container>
    )
}

export default Paidserveces;





