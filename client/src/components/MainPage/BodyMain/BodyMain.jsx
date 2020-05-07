import React, { Component } from "react";
import ReasonToUse from "./ReasonToUse/ReasonToUse"
import SmartManaging from "./SmartManaging/SmartManaging"
import Packages from "./Packeges/Packeges"

class BodyMain extends Component {
  render() {
    return (
      <>
        <ReasonToUse />
        <SmartManaging />
        <Packages />
      </>
    )
  }
}

export default BodyMain