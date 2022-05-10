import React from "react";
import "./WsHeader.css";
import logo_siata from "../assets/logo_siata.svg";
import logo_siata_soluna from "../assets/logo_siata_soluna.png";
import logo_siata_visitanos from "../assets/logo_siata_visitanos.png";

function WsHeader (){
    return(
    <React.Fragment>
        <header>
        <div className="logosiatavisitanos-header"> <a href="https://siata.gov.co/sitio_web/index.php/">
            <img className="logo_siata_soluna" src={logo_siata_soluna}></img>
        </a>
        <a href="https://siata.gov.co/siata_nuevo/">
            <img className="logo_siata_visitanos" src={logo_siata_visitanos}></img>
        </a>
        </div>
        <div>
        <div className="logosiata-header">
            <h1>Sistema de Alerta Temprana de Medellín y el Valle de Aburrá</h1>
            <img className="logosiata2-header" src= {logo_siata} ></img>
        </div>
        <div className="socialimg-header">
            <p>Siguenos en:</p>
            <img></img>
            <img></img>
            <img></img>
            <img></img>
            <img></img>
        </div>
        </div>
        </header>
    </React.Fragment> 
    )
}  

export {WsHeader}