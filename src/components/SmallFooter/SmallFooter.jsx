import React from "react"
import style from "./SmallFooter.module.scss"

const SmallFooter = () => (
  <div className={style.footer}>
    <div className={style.footer_container}>
      <span className={style.footer_logo}><a href="https://www.google.com.ua/">AppCo</a></span>
      <span className={style.footer_rights}>All rights reserved by ThemeTags</span>
      <span className={style.footer_year}>Copyrights © 2019.</span>
    </div>
  </div>
)

export default SmallFooter