import react, { Component } from "react";
import { render } from "react-dom";
import './counter.css';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  increment() {
    this.setState({
      count: this.state.count + 1
    })
  }

  Decrement() {
    this.setState({
      count: this.state.count - 1
    })
  }

  Reset() {
    this.setState({
      count: this.state.count = 0
    })
  }

  render() {
    return (
      <div>
        <h2>Regular Counter</h2>
        <div> {this.state.count} </div>
        <button className="button" onClick={() => this.Decrement()}>Decrement</button>
        <button className="button" onClick={() => this.Reset()}>Reset</button>
        <button className="button" onClick={() => this.increment()}>Increment</button>
      </div>
    );
  }
}
export default Counter;