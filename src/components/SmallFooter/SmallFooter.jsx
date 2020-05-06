import React from "react"
import style from "./SmallFooter.module.scss"
import { Link } from "react-router-dom"

const SmallFooter = () => (
  <div className={style.footer}>
    <div className={style.footer_container}>
      <span className={style.footer_logo}><Link to="/">AppCo</Link></span>
      <span className={style.footer_rights}>All rights reserved by ThemeTags</span>
      <span className={style.footer_year}>Copyrights © 2019.</span>
    </div>
  </div>
)

export default SmallFooter