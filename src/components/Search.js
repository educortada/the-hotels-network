import React, { Component } from 'react'

import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

class Search extends Component {
  state = {
    adults: 2,
    children: 0,
    startDate: new Date(),
    endDate: new Date().setDate(new Date().getDate() + 1)
  }

  handleChangeGuests = (event) => {
    if (event.target.id === 'adults') {
      this.setState({
        adults: event.target.value
      })
    } else if (event.target.id === 'children') {
      this.setState({
        children: event.target.value
      })
    }
  }

  handleChangeStartDate = (date) => {
    this.setState({ startDate: date })
  }

  handleChangeEndDate = (date) => {
    this.setState({ endDate: date })
  }

  handleSubmitSearch = (event) => {
    event.preventDefault()
    this.props.handleSubmitUpdateSummary(this.state.startDate, this.state.endDate, this.state.adults, this.state.children)
  }

  render () {
    return (
      <div className="engine text-center">
        <div className="engine-wrapper">
          <div className="container text-center">
            <form onSubmit={this.handleSubmitSearch} id="search" className="form-inline">
              <div className="form-group">
                <div className="input-group date" data-date-format="dd/mm/yyyy">
                  <DatePicker
                    selected={this.state.startDate}
                    onChange={this.handleChangeStartDate}
                    className="datepicker-custom"
                    dateFormat="dd/MM/yyyy"
                  />
                  {/* <input id="checkin" type="text" className="form-control" placeholder="Check in" /> */}
                  <div className="input-group-addon" >
                    <span className="glyphicon glyphicon-calendar"></span>
                  </div>
                </div>
              </div>
              <div className="form-group">
                <div className="input-group date" data-date-format="dd/mm/yyyy">
                  <DatePicker
                    selected={this.state.endDate}
                    onChange={this.handleChangeEndDate}
                    className="datepicker-custom"
                    dateFormat="dd/MM/yyyy"
                  />
                  {/* <input id="checkout" type="text" className="form-control" placeholder="Checkout" /> */}
                  <div className="input-group-addon" >
                    <span className="glyphicon glyphicon-calendar"></span>
                  </div>
                </div>
              </div>
              <div className="form-group select-inline">
                <select
                  value={this.state.adults}
                  onChange={this.handleChangeGuests}
                  className="form-control"
                  placeholder="Adults"
                  id="adults"
                >
                  <option value="1">Adults: 1</option>
                  <option value="2">Adults: 2</option>
                  <option value="3">Adults: 3</option>
                  <option value="4">Adults: 4</option>
                  <option value="5">Adults: 5</option>
                  <option value="6">Adults: 6</option>
                  <option value="7">Adults: 7</option>
                  <option value="8">Adults: 8</option>
                  <option value="9">Adults: 9</option>
                </select>
              </div>
              <div className="form-group select-inline">
                <select
                  value={this.state.children}
                  onChange={this.handleChangeGuests}
                  className="form-control"
                  placeholder="Children"
                  id="children"
                >
                  <option value="0">Children: 0</option>
                  <option value="1">Children: 1</option>
                  <option value="2">Children: 2</option>
                  <option value="3">Children: 3</option>
                  <option value="4">Children: 4</option>
                  <option value="5">Children: 5</option>
                  <option value="6">Children: 6</option>
                  <option value="7">Children: 7</option>
                  <option value="8">Children: 8</option>
                  <option value="9">Children: 9</option>
                </select>
              </div>
              <div className="form-group">
                <button className="btn btn-primary">Modify</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default Search
