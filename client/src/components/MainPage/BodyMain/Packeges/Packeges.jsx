import React from "react";
import style from "./Packeges.module.scss"
import basicImg from "../../../../images/basic.png"
import standartImg from '../../../../images/standart.png'
import unlimitedImg from '../../../../images/unlimitid.png'

const Packeges = () => (
  < section className={style.section}>
    <h3 className={style.section_title}><b>Afforadble Pricing and Packages</b> choose your best one</h3>
    <p className={style.section_descr}>Monotonectally grow strategic process improvements vis-a-vis integrated resources.</p>
    <ul className={style.section_list}>
      <li className={style.section_list_item}>
        <h4>Basic</h4>
        <img src={basicImg} alt="Basic" />
        <div className={style.section_list_item_price}>$29</div>
        <p className={style.section_list_item_descr}>Push Notifications <br /> Data Transfer <br />SQL Database <br /> Search & SEO Analytics <br /> 24/7 Phone Support <br /> 2 months technical support <br /> 2+ profitable keyword</p>
        <button className={style.section_list_item_button}>Purchase now</button>
      </li>
      <li className={style.section_list_item}>
        <h4>Standard</h4>
        <img src={standartImg} alt="standart" />
        <div className={style.section_list_item_price}>$149</div>
        <p className={style.section_list_item_descr}>Push Notifications <br /> Data Transfer <br />SQL Database <br /> Search & SEO Analytics <br /> 24/7 Phone Support <br /> 2 months technical support <br /> 2+ profitable keyword</p>
        <button className={style.section_list_item_button}>Purchase now</button>
      </li>
      <li className={style.section_list_item}>
        <h4>Unlimited</h4>
        <img src={unlimitedImg} alt="unlimited" />
        <div className={style.section_list_item_price}>$39</div>
        <p className={style.section_list_item_descr}>Push Notifications <br /> Data Transfer <br />SQL Database <br /> Search & SEO Analytics <br /> 24/7 Phone Support <br /> 2 months technical support <br /> 2+ profitable keyword</p>
        <button className={style.section_list_item_button}>Purchase now</button>
      </li>
    </ul>
    <p className={style.section_info}>If you need custom services or Need more? <a href="https://www.google.com/">Contact us</a></p>
  </ section >)

export default Packeges
