// Write your code here

import {Component} from 'react'
import './index.css'

class Speedometer extends Component {
  state = {count: 0}

  onIncrease = () => {
    const {count} = this.state
    if (count < 200) {
      this.setState(prevState => ({count: prevState.count + 10}))
    }
  }

  onDecrease = () => {
    const {count} = this.state

    if (count > 0) {
      this.setState(prevState => ({count: prevState.count - 10}))
    }
  }

  render() {
    const {count} = this.state
    return (
      <div className="container">
        <h1>SPEEDOMETER</h1>
        <img
          alt="speedometer"
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
        />
        <h1 className="counter">Speed Is {count}mph</h1>
        <p className="counter-p">Min Limit is 0mph, Max Limit is 200mph</p>
        <div>
          <button
            type="button"
            onClick={this.onIncrease}
            className="accelerate-button"
          >
            Accelerate
          </button>
          <button
            type="button"
            onClick={this.onDecrease}
            className="break-button"
          >
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}

export default Speedometer
