import React, { Component } from 'react'

import { priceWithDiscount } from '../helpers/helpers'

class Card extends Component {
  handleClickRoom = () => {
    this.props.handleClickUpdateRoomInSummary(this.props.room)
  }

  render () {
    const { img, name, description, size, beds, people, price } = this.props.room
    const { promoCode } = this.props
    return (
      <article onClick={this.handleClickRoom} className="card clearfix pointer active">
        <div className="room-image">
          <img src={img} width="100%" alt="img-placeholder" />
        </div>
        <div className="room-content">
          <h5 className="form-group">{name}</h5>
          <p className="form-group">{description}</p>
          <p className="form-group">Size: {size}m2</p>
          <div className="room-info">
            <div className="item">
              <span className="inline-block">
                <img src="images/icons/double-bed.svg" width="40" alt="img-placeholder" />
              </span>
              <div>Beds: {beds}</div>
            </div>
            <div className="item">People: {people}</div>
            <div className="item price text-right">
              {promoCode ? (
                <p>
                  <span>{priceWithDiscount(price, promoCode)}€</span>
                  <span className="line-through">{price}€</span>
                </p>
              ) : (
                <span>{price}€</span>
              )}
            </div>
          </div>
        </div>
      </article>
    )
  }
}

export default Card
