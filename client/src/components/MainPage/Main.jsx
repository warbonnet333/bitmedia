import React, { Component } from 'react';
import HeaderMain from "./HeaderMain/HeaderMain"
import BodyMain from "./BodyMain/BodyMain"
import FooterMain from "./FooterMain/FooterMain"

class Main extends Component {

  render() {
    return (
      <>
        <HeaderMain />
        <BodyMain />
        <FooterMain/>
      </>
    )
  }
}

export default Main