import React, { Component } from "react"
import style from "./Table.module.scss"

class Table extends Component {


  render() {
    const { users } = this.props
    return (
      <>
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
              <th>Total clicks</th>
              <th>Totsl page views</th>
            </tr>
          </thead>
          <tbody className={style.table_body}>
            {users.map(({ id, first_name, last_name, email, gender, ip_address }) =>
              <tr key={id} className={style.table_body_row}>
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
      </>
    )
  }
}

export default Table