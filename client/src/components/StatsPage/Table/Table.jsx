import React, { Component } from "react"
import style from "./Table.module.scss"
import { withRouter, Link } from "react-router-dom"

class Table extends Component {
  chooseUser = (id) => {
    this.props.history.push({
      pathname: `/stats/${id}`
    })
  }

  render() {
    const { users } = this.props
    return (
      <div className={style.container}>
        <div className={style.history}>
          <Link className={style.history_link} to="/">Main page</Link>
          <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 9L5 5L1 0.999998" stroke="#CCCCCC" strokeLinecap="round" />
          </svg>
          <span className={style.history_curent}>User satistics</span>
        </div>
        <h2 className={style.title}>Users statistics</h2>
        <table className={style.table}>
          <thead className={style.table_head}>
            <tr>
              <th>Id</th>
              <th>First name</th>
              <th>Last name</th>
              <th>Email</th>
              <th>Gender</th>
              <th>Ip address</th>
              {/* <th>Total clicks</th> */}
              {/* <th>Totsl page views</th> */}
            </tr>
          </thead>
          <tbody className={style.table_body}>
            {users.map(({ id, first_name, last_name, email, gender, ip_address }) =>
              <tr key={id} className={style.table_body_row} onClick={() => this.chooseUser(id)}>
                <td className={style.table_body_id}>{id}</td>
                <td className={style.table_body_first_name}>{first_name}</td>
                <td className={style.table_body_last_name}>{last_name}</td>
                <td className={style.table_body_email}>{email}</td>
                <td className={style.table_body_gender}>{gender}</td>
                <td className={style.table_body_ip_address}>{ip_address}</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    )
  }
}

export default withRouter(Table)