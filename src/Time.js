import React from "react";
import Timer from "./Timer";

class Time extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      val: 0,
      intervalid: 0
    };
  }
  start = () => {
    if (!this.state.intervalid) {
      let interval = setInterval(() => {
        this.setState({
          val: this.state.val + 1000
        });
      }, 1000);
      this.setState({ intervalid: interval });
    } else this.pause();
  };
  pause = () => {
    clearInterval(this.state.intervalid);
    this.setState({ intervalid: null });
  };
  reset = () => {
    this.pause();
    this.setState({ val: 0 });
  };
  test = () => {
    if (this.state.intervalid) this.pause();
    else this.start();
  };
  render() {
    return (
      <div className="div-container">
        <Timer timems={this.state.val} />
        <div className="btn-div">
          <button onClick={this.test}>
            {this.state.intervalid ? "Pause" : "Start"}
          </button>
          <button onClick={this.reset}>Reset</button>
        </div>
      </div>
    );
  }
}

export default Time;
