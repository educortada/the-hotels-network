import React, { Component } from 'react'

import { priceWithDiscount } from '../helpers/helpers'

class Summary extends Component {
  handleChangeRooms = (event) => {
    this.props.updateNumberOfRoomsInSummary(event.target.value)
  }

  handleClickSave = () => {
    this.props.saveInLocalStorage()
  }

  render () {
    const { room, adults, children, numberOfRooms, promoCode } = this.props
    return (
      <aside className="col-md-4 sidebar">
        <div className="card">
          <h2>Reservation Summary</h2>
          <div className="clearfix">
            <h5 className="pull-left">
              {room
                ? <span className="text-success">{room.name}</span>
                : <span className="text-danger">Select your accommodation</span>}
            </h5>
            {room &&
              <div className="form-group pull-right">
                <select
                  value={numberOfRooms}
                  onChange={this.handleChangeRooms}
                  className="pull-right"
                  id="rooms"
                >
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                </select>
              </div>}
          </div>
          <div className="clearfix">
            <div className="card-content">
              <p className="main">Check in</p>
              <p className="base">From 15.00h</p>
            </div>
            <div className="card-content">
              <p className="main">Check out</p>
              <p className="base">Before 12.00h</p>
            </div>
            <div className="card-content">
              <p className="main">Reservation date</p>
              <p className="base">
                From <strong><span id="checkin-summary">{this.props.startDate}</span></strong> to <strong id="checkout-summary">{this.props.endDate}</strong>
              </p>
            </div>
            <div className="card-content">
              <p className="main">People</p>
              <p className="base" id="adults-summary">{adults} Adults</p>
              <p className="base" id="children-summary">{children} Children</p>
            </div>
            <div className="card-checkout clearfix">
              <div className="left pull-left">
                <p className="main">Total</p>
                <p className="base"><a href="/">Price details ></a></p>
              </div>
              <div className="right pull-right">
                {room ? (
                  // User have selected a room
                  promoCode ? (
                    // User have selected a room and have a promo code
                    <p className="main">
                      <span>{priceWithDiscount(room.price * numberOfRooms, promoCode)}€</span>
                      <span className="line-through">{room.price * numberOfRooms}€</span>
                    </p>
                  ) : (
                    // User have selected a room and doesn't have a promo code
                    <p className="main">
                      <span>{room.price * numberOfRooms}€</span>
                    </p>
                  )
                ) : (
                  // User doesn't have selected a room
                  <p className="main">0€</p>
                )}
              </div>
            </div>
            <button
              onClick={this.handleClickSave}
              className="btn btn-primary btn-group-justified"
            >
              Save
            </button>
          </div>
        </div>
      </aside>
    )
  }
}

export default Summary
