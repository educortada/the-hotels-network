import React, { Component } from 'react'

import './App.css'

// Components
import Navbar from './components/Navbar'
import Search from './components/Search'
import Wizard from './components/Wizard'
import Card from './components/Card'
import Summary from './components/Summary'
import Footer from './components/Footer'

// Data
import rooms from './data/data'

// Helpers
import { dateFormat } from './helpers/helpers'

class App extends Component {
  state = {
    startDate: dateFormat(new Date()),
    endDate: dateFormat(new Date().setDate(new Date().getDate() + 1)),
    adults: 2,
    children: 0,
    room: null,
    numberOfRooms: 1,
    promoCode: null
  }

  updateRoomInSummary = (room) => {
    this.setState({ room })
  }

  updateNumberOfRoomsInSummary = (numberOfRooms) => {
    this.setState({ numberOfRooms })
  }

  renderList = () => rooms.map(room => {
    return (
      <Card
        key={room.id}
        room={room}
        handleClickUpdateRoomInSummary={this.updateRoomInSummary}
        promoCode={this.state.promoCode}
      />
    )
  })

  updateSummary = (startDate, endDate, adults, children) => {
    this.setState({
      startDate: dateFormat(startDate),
      endDate: dateFormat(endDate),
      adults,
      children
    })
  }

  saveInLocalStorage = () => {
    // localStorage can only store strings, arrays and objects need to be passed
    // into JSON.stringify() before being passed to setItem()
    localStorage.setItem('startDate', this.state.startDate)
    localStorage.setItem('endDate', this.state.endDate)
    localStorage.setItem('adults', this.state.adults)
    localStorage.setItem('children', this.state.children)
    localStorage.setItem('numberOfRooms', this.state.numberOfRooms)
    localStorage.setItem('room', JSON.stringify(this.state.room))
  }

  hydrateStateWithLocalStorage = () => {
    // for all items in state
    for (let key in this.state) {
      // if the key exists in localStorage
      if (localStorage.hasOwnProperty(key)) {
        // get the key's value from localStorage
        let value = localStorage.getItem(key)
        // parse the localStorage string and setState
        try {
          value = JSON.parse(value)
          this.setState({ [key]: value })
        } catch (e) {
          // handle empty string
          this.setState({ [key]: value })
        }
      }
    }
  }

  getPromoCode = () => {
    const params = new URLSearchParams(window.location.search)
    if (params.has('promo_code')) {
      const promoCode = (params.get('promo_code'))
      this.setState({ promoCode: Number(promoCode) })
    }
  }

  componentDidMount = () => {
    this.hydrateStateWithLocalStorage()
    this.getPromoCode()
  }

  render () {
    console.log(this.state.startDate)
    return (
      <div className="room-and-rates">
        <header>
          <Navbar />
        </header>
        <main>
          <Search
            handleSubmitUpdateSummary={this.updateSummary}
          />
          <div className="container rar-summary">
            <Wizard />
            <section className="row">
              <div className="col-md-8 main">
                {this.renderList()}
              </div>
              <Summary
                startDate={this.state.startDate}
                endDate={this.state.endDate}
                adults={this.state.adults}
                children={this.state.children}
                room={this.state.room}
                numberOfRooms={this.state.numberOfRooms}
                updateNumberOfRoomsInSummary={this.updateNumberOfRoomsInSummary}
                saveInLocalStorage={this.saveInLocalStorage}
                promoCode={this.state.promoCode}
              />
            </section>
          </div>
          <Footer />
        </main>
      </div>
    )
  }
}

export default App
