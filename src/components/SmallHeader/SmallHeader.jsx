import React from "react";
import { Link } from "react-router-dom";
import style from './SmallHeader.module.scss'

const SmallHeader = () => (
  <div className={style.smallHeader}>
    <Link className={style.smallHeader_logo} to='/'>AppCo</Link>
  </div>
)



export default SmallHeader