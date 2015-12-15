import React, {Component} from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      secondsElapsed: 0
    };
    this.rerender = 0;
  }
  
  componentDidMount() {
    setInterval(() => {
      this.setState({secondsElapsed: ++this.state.secondsElapsed});
    }, 1000);
  }
  
  
  render() {
    this.rerender++;
    return (
      <div>
        <p id="seconds">
          Seconds since the component loaded: {this.state.secondsElapsed}
        </p>
        <p id="rerender">
          Component has been rerender due to user changes: {this.rerender}
        </p>
      </div>
    );
  }
}

export default Counter;