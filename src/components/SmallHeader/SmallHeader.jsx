import React from "react";
import { Link } from "react-router-dom";
import style from './SmallHeader.module.scss'

const SmallHeader = () => (
  <div className={style.smallHeader}>
    <div className={style.smallHeader_container}>
      <Link className={style.smallHeader_logo} to='/'>AppCo</Link>
    </div>
  </div>
)



export default SmallHeader