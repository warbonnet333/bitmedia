import React, { Component } from "react";
import SmallHeader from "../SmallHeader/SmallHeader"
import Table from "./Table/Table"
import SmallFooter from "../SmallFooter/SmallFooter"
import ReactPaginate from 'react-paginate';
import imgLeft from "../../images/arrow_left.png"
import imgRight from "../../images/arrow_right.png"
import style from "./Stats.module.scss"


const axios = require('axios');


class Stats extends Component {
  state = {
    users: [],
    page: 1,
    stats: []
  }

  async componentDidMount() {
    const { page } = this.state
    try {
      const { data } = await axios.get(`http://localhost:8017/users?page=${page}`)
      this.setState({ users: data })
    } catch (error) {
      console.log(error)
    }
  }

  render() {
    const { users } = this.state
    return (
      <>
        <SmallHeader />
        <Table users={users} />
        <ReactPaginate
          pageCount={40}
          pageRangeDisplayed={5}
          marginPagesDisplayed={0}
          breakLabel={""}
          previousLabel={<img className={style.paginationBox_prev} src={imgLeft} alt="leftBtn" />}
          nextLabel={<img className={style.paginationBox_next} src={imgRight} alt="leftBtn" />}
          containerClassName={style.paginationBox}
          pageClassName={style.paginationBox_item}
        />
        <SmallFooter />
      </>
    )
  }
}

export default Stats