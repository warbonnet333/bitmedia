import React, { Component } from "react"
import { withRouter } from "react-router-dom"
import dataArr from "../../server/users_statistic.json"
import getIdFromProps from "../../service/getIdFromProps"

class UserPage extends Component {
  state = {
    userStats: []
  }

  componentDidMount() {
    const id = getIdFromProps(this.props)
    const userStats = dataArr.filter(item => item.user_id === Number(id))
    this.setState({ userStats })
  }

  render() {
    return (`User page number`)
  }
}

export default withRouter(UserPage)