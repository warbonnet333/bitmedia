import React, { Component } from "react";
import SmallHeader from "../SmallHeader/SmallHeader"
import Table from "./Table/Table"
import SmallFooter from "../SmallFooter/SmallFooter"
import ReactPaginate from 'react-paginate';
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

  async componentDidUpdate(prevProps, prevState) {
    if (prevState.page !== this.state.page) {
      console.log("inside")
      try {
        const { page } = this.state
        const { data } = await axios.get(`http://localhost:8017/users?page=${page}`)
        this.setState({ users: data })
      } catch (error) {
        console.log(error)
      }
    }

    console.log("change")

  }

  pageClick = ({ selected }) => {
    this.setState({ page: selected + 1 })
  }

  render() {
    const { users, page } = this.state
    return (
      <>
        <SmallHeader />
        <Table users={users} />
        <ReactPaginate
          pageCount={40}
          pageRangeDisplayed={5}
          marginPagesDisplayed={0}
          breakLabel={""}
          previousLabel={
            <svg className={style.paginationBox_prev} viewBox="0 0 17 28" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 2L3 14L15 26" stroke={page !== 1 ? "#3A80BA" : "#F1F1F1"} strokeWidth="4" strokeLinecap="round" />
            </svg>}
          nextLabel={
            <svg className={style.paginationBox_next} viewBox="0 0 17 28" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 2L14 14L2 26" stroke={page !== 40 ? "#3A80BA" : "#F1F1F1"} strokeWidth="4" strokeLinecap="round" />
            </svg>
          }
          containerClassName={style.paginationBox}
          pageClassName={style.paginationBox_item}
          pageLinkClassName={style.paginationBox_item_link}
          activeClassName={style.paginationBox_item_active}
          activeLinkClassName={style.paginationBox_item_link_active}
          onPageChange={this.pageClick}
        />
        <SmallFooter />
      </>
    )
  }
}

export default Stats