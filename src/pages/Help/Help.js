import "./Help.css"
import React from 'react'
import Container from "../../containers/Container";
import { Link } from "react-router-dom";

const help = [


    {
        img: "https://theme.zdassets.com/theme_assets/759275/ae08be12c050c14d3ab87c97d87a756050aaa2fd.svg",
        title: "Мой профиль / Mening profilim", price: "Регистрация профиля", location: "Настройки профиля, 16:08",

    },
    {
        img: "https://theme.zdassets.com/theme_assets/759275/914abb187f25c83408b2244f0f7881310e4d8ddf.svg",
        title: "Мой профиль / Mening profilim", price: "Регистрация профиля", location: "Настройки профиля, 16:08",

    },
    {
        img: "https://theme.zdassets.com/theme_assets/759275/8506f59d65e03570348a69d9699a2f1d9d85a1cd.svg",
        title: "Мой профиль / Mening profilim", price: "Регистрация профиля", location: "Настройки профиля, 16:08",

    },
    {
        img: "https://theme.zdassets.com/theme_assets/759275/d569b409b713ad719cb7af5707afcdab1652f431.svg",
        title: "Мой профиль / Mening profilim", price: "Регистрация профиля", location: "Настройки профиля, 16:08",

    },
    {
        img: "https://theme.zdassets.com/theme_assets/759275/cbe0baa8d1597c56adf3aba6bd1983e6282fcffe.svg",
        title: "Мой профиль / Mening profilim", price: "Регистрация профиля", location: "Настройки профиля, 16:08",

    },
    {
        img: "https://theme.zdassets.com/theme_assets/759275/b5e219fdd55d7f96929fbd3551fe5193d25f5261.svg",
        title: "Мой профиль / Mening profilim", price: "Регистрация профиля", location: "Настройки профиля, 16:08",

    },
    {
        img: "	https://theme.zdassets.com/theme_assets/759275/909c4b813312e401b8a2be4c4a2f42ee7aadb707.svg",
        title: "Мой профиль / Mening profilim", price: "Регистрация профиля", location: "Настройки профиля, 16:08",

    },
    {
        img: "https://theme.zdassets.com/theme_assets/759275/6833ffcf710bdbb83320956b0b248e70268f75db.svg",
        title: "Мой профиль / Mening profilim", price: "Регистрация профиля", location: "Настройки профиля, 16:08",

    },
    {
        img: "	https://theme.zdassets.com/theme_assets/759275/7284077d1e3c4e26a74072a0cf72d1e9ba00f62b.svg",
        title: "Мой профиль / Mening profilim", price: "Регистрация профиля", location: "Настройки профиля, 16:08",

    },
]

const Help = () => {
    return (
        <Container>
            <div className="container-help">
                <h1>Help</h1>
                <div className="row">
                    {help.map(v =>
                        <div className="col-sm-6 col-md-4 col-lg-3 p-3">
                            <div className="d-flex"><img className="img" src={v.img} />
                                <div className="m-3"><p className="color-red">{v.title}</p> <strong>{v.price}</strong> {v.location}</div></div>
                        </div>)}
                </div>
            </div>
        </Container>
    )
}

export default Help;





