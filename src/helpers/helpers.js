import moment from 'moment'

export const dateFormat = (date) => (
  moment(date).format('DD/MM/YYYY')
)

export const priceWithDiscount = (price, promoCode) => (
  price - (price * promoCode / 100)
)
