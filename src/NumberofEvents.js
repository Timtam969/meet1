import React, { Component } from 'react';



class NumberOfEvents extends Component {

  //   state = {
  //     numberOfEvents: 32
  //   };

  //   handleInputChanged = (value) => {
  //     let actValue = parseInt(event.target.value)
  //     if (actValue > 0 && actValue <= 32) {
  //       this.setState({
  //         numberOfEvents: actValue,
  //         errorText: ' '
  //       });
  //     } else if (actValue > 32 || actValue < 1) {
  //       this.setState({
  //         numberOfEvents: 32,
  //         errorText: 'Please choose a number between 1 and 32.'
  //       });
  //       actValue = 32;
  //     } else {
  //       this.setState({
  //         numberOfEvents: undefined,
  //         errorText: ' '
  //       });
  //       actValue = 1;
  //     }
  //     this.props.updateEvents(undefined, actValue);
  //   };

  //   render() {
  //     return (
  //       <div className="numberOfEvents">
  //         <label htmlFor="number-of-events">Show max: </label>
  //         <input
  //           type="number"
  //           className="number-of-events"
  //           min="1"
  //           max="32"
  //           value={this.state.numberOfEvents}
  //           onChange={this.handleInputChanged}
  //         />
  //       </div>
  //     );
  //   }
  // }

  state = {
    num: 32
  };

  changeNum = (value) => {
    this.setState({ num: value });
    this.props.updateNumberOfEvents(value);
    if (value < 1 || value > 32) {
      this.setState({ errorText: "Select number from 1 to 32" });
    };
  };

  componentDidMount() {
    this.setState({ num: this.props.num || 32 });
  }

  render() {
    const { num } = this.state;

    return (
      <div>
        <label>
          Number of events
          <input
            className="num"
            type="number"
            value={num}
            onChange={(event) => this.changeNum(event.target.value)}
          ></input>
        </label>
      </div>
    );
  }
}

export default NumberOfEvents; 