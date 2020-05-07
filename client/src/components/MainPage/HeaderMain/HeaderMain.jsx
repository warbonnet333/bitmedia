import React, { Component } from "react";
import style from "./HeaderMain.module.scss"
import mobileImg from "../../../images/mobile.png"
import { Link } from "react-router-dom";

class HeaderMain extends Component {


  render() {
    return (
      <header className={style.header}>
        <h1>
          <Link to='/' >AppCo</Link>
        </h1>
        <h2><b>Brainstorming</b> for desired perfect Usability</h2>
        <p>Our design projects are fresh and simple and will benefit your business greatly. Learn more about our work!</p>
        <Link to='/stats'><div className={style.header_button}>View Stats</div></Link >
        <div className={style.header_mobile}> <img src={mobileImg} alt="mobile" /></div>
      </header >
    )
  }
}

export default HeaderMain