import React, { Component } from 'react';

class NumberOfEvents extends Component {
  state = {
    numberOfEvents: 32
  };

  handleInputChanged = (event) => {
    const value = event.target.value;
    if (value >= 33 || value <= 0) {
      this.setState({
        numberOfEvents: value,
        errorText: "Please enter a number between 1-32",
      });
    } else {
      this.setState({
        numberOfEvents: event.target.value,
      });
    }
  };

  render() {
    return (
      <div className="numberOfEvents">
        <label>
          <input
            type="number"
            className="number-input"
            // placeholder="Number of events"
            value={this.state.numberOfEvents}
            onChange={this.handleInputChanged}
          />
        </label>
      </div>
    );
  }
}
export default NumberOfEvents;


//   state = {
//     num: 32
//   };

//   changeNum = (value) => {
//     this.setState({ num: value });
//     this.props.updateNumberOfEvents(value);
//     if (value < 1 || value > 32) {
//       this.setState({ errorText: "Select number from 1 to 32" });
//     };
//   };

//   componentDidMount() {
//     this.setState({ num: this.props.num || 32 });
//   }

//   render() {
//     const { num } = this.state;

//     return (
//       <div>
//         <label>
//           Number of events
//           <input
//             className="num"
//             type="number"
//             value={num}
//             onChange={(event) => this.changeNum(event.target.value)}
//           ></input>
//         </label>
//       </div>
//     );
//   }
// }

// export default NumberOfEvents; 