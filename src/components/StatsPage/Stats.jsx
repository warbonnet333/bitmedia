import React, { Component } from "react";
import SmallHeader from "../SmallHeader/SmallHeader"
import Table from "./Table/Table"


class Stats extends Component {
  render() {

    return (
      <>
        <SmallHeader />
        <Table />
        {/* <SmallFotter /> */}
      </>
    )
  }
}

export default Stats