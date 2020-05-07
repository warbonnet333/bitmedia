import React from "react";
import style from "./SmartManaging.module.scss"
import notePad from "../../../../images/macbook.png"

const SmartManaging = () => (
  <section className={style.section}>
    <div className={style.section_text}>
      <h3 className={style.section_title}>Start Managing your apps business, more faster</h3>
      <p className={style.section_descr}>Objectively deliver professional value with diverse web-readiness. Collaboratively transition wireless customer service without goal-oriented catalysts for change. Collaboratively.</p>
      <button className={style.section_button}>Learn more</button>
    </div>
    <div className={style.section_notepad}><img src={notePad} alt="notepad"/></div>
  </section>
)

export default SmartManaging
