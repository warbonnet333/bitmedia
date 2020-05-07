import React, { Component } from "react"
import { withRouter } from "react-router-dom";
import dataArr from "../../../server/users_statistic.json"
import { VictoryChart, VictoryLine, VictoryTheme } from 'victory';
import style from "./ViewsDiagr.module.scss"
const moment = require('moment');

class ClicksDiagr extends Component {

  state = {
    dataViews: []
  }

  async componentDidMount() {
    let viewsArr = [];
    const userId = this.props.match.params.id
    const userData = await dataArr.filter((item) => item.user_id === Number(userId))

    for (let i = 0; i < userData.length; i++) {
      const newObj = {
        y: userData[i].page_views,
        x: moment(userData[i].date).format("Do"),
      }
      viewsArr.push(newObj)
    }

    this.setState({ dataViews: viewsArr })
  }

  render() {
    const { dataViews } = this.state
    return (
      <div className={style.container}>
        <h3 className={style.title}>Views</h3>
        <VictoryChart height={230} theme={VictoryTheme.material}>
          <VictoryLine
            interpolation="cardinal" data={dataViews.slice(dataViews.length - 8)}
            style={{ data: { stroke: "#3A80BA" } }}
          />
        </VictoryChart>
      </div>
    )
  }
}

export default withRouter(ClicksDiagr)