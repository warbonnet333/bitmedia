import React, { Component } from "react"
import { withRouter, Link } from "react-router-dom"
import getIdFromProps from "../../service/getIdFromProps"
import SmallHeader from "../SmallHeader/SmallHeader"
import SmallFooter from "../SmallFooter/SmallFooter"
import ClicksDiagr from "./ClicksDiagr/ClicksDiagr"
import ViewsDiagr from "./ViewsDiagr/ViewsDiagr"
import style from "./UserPage.module.scss"
import UsersData from "../../server/users.json"


class UserPage extends Component {
  state = {
    curentUser: {
      first_name: "Vlad",
      last_name: "Bondar"
    }
  }

  componentDidMount() {
    const id = getIdFromProps(this.props)
    const curentUser = UsersData.find(item => item.id === Number(id))
    this.setState({ curentUser })
  }

  render() {
    const { curentUser } = this.state
    return (
      <>
        <SmallHeader />
        <div className={style.history}>
          <Link className={style.history_link} to="/">Main page</Link>
          <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 9L5 5L1 0.999998" stroke="#CCCCCC" strokeLinecap="round" />
          </svg>
          <Link className={style.history_link} to="/stats">User satistics</Link>
          <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 9L5 5L1 0.999998" stroke="#CCCCCC" strokeLinecap="round" />
          </svg>
          <span className={style.history_curent}>{curentUser.first_name} {curentUser.last_name}</span>
          <h2 className={style.userName}>{curentUser.first_name} {curentUser.last_name}</h2>
        </div>
        <ClicksDiagr />
        <ViewsDiagr />
        <SmallFooter />
      </>
    )
  }
}

export default withRouter(UserPage)