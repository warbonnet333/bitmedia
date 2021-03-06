import React, { Component } from 'react';
import style from "./FooterMain.module.scss"
import {Link} from "react-router-dom"

class FooterMain extends Component {
  render() {
    return (
      <footer className={style.footer}>
        <form className={style.footer_form}>
          <input className={style.input} type="text" placeholder="Enter your email" />
          <button className={style.button}>Subscribe</button>
        </form>
        <div className={style.footer_info}>
          <span className={style.footer_info_logo}><Link to="/">AppCo</Link></span>
          <span className={style.footer_info_rights}>All rights reserved by ThemeTags</span>
          <span className={style.footer_info_year}>Copyrights © 2019.</span>
        </div>
      </footer>
    )
  }
}

export default FooterMain