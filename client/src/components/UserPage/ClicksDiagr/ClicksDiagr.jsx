import React, { Component } from "react"
import { withRouter } from "react-router-dom";
import dataArr from "../../../server/users_statistic.json"
import { VictoryChart, VictoryLine, VictoryTheme } from 'victory';
import style from "./ClicksDiagr.module.scss"
const moment = require('moment');

class ClicksDiagr extends Component {

  state = {
    dataClick: [],
  }

  async componentDidMount() {
    let clicksArr = [];
    const userId = this.props.match.params.id
    const userData = await dataArr.filter((item) => item.user_id === Number(userId))
    for (let i = 0; i < userData.length; i++) {
      const newObj = {
        y: userData[i].clicks,
        x: moment(userData[i].date).format("Do"),
      }
      clicksArr.push(newObj)
    }

    this.setState({ dataClick: clicksArr })
  }

  render() {
    const { dataClick } = this.state
    return (
      <div className={style.container}>
        <h3 className={style.title}>Clicks</h3>
        <VictoryChart height={230} theme={VictoryTheme.material}>
          <VictoryLine
            interpolation="cardinal" data={dataClick.slice(dataClick.length - 8)}
            style={{ data: { stroke: "#3A80BA" } }}
          />
        </VictoryChart>
      </div>
    )
  }
}

export default withRouter(ClicksDiagr)