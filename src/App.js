import React, { Component } from 'react';
import './App.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
// import { mockData } from './mock-data';
import { getEvents, extractLocations } from './api';
import './nprogress.css';

class App extends Component {
  state = {
    events: [],
    locations: [],
    locationSelected: 'all',
    numberOfEvents: 32
  }





  updateEvents = (location, maximumEvents) => {
    // if (maximumEvents === undefined) {
    //   maximumEvents = this.state.numberOfEvents;
    // } else (
    //   this.setstate({ numberOfEvents: maximumEvents })
    // )
    // if (location === undefined) {
    //   location = this.state.locationSelected;
    // }

    getEvents().then((events) => {
      const locationEvents = (location === 'all') ?
        events :
        events.filter((event) => event.location === location);
      this.setState({
        events: locationEvents.slice(0, this.state.numberOfEvents),
      });
    });
  }

  updateNumberOfEvents(number) {
    this.setState({
      numberOfEvents: number,
    });
  }

  componentDidMount() {
    this.mounted = true;
    getEvents().then((events) => {
      if (this.mounted) {
        this.setState({ events, locations: extractLocations(events) });
      }
    });
  }


  componentWillUnmount() {
    this.mounted = false;
  }


  render() {
    return (
      <div className="App">
        <h1>The Meet App</h1>
        <h3 className="subtitle">Search for your city and see upcoming events:</h3>

        <CitySearch locations={this.state.locations}
          updateEvents={this.updateEvents} />
        <NumberOfEvents numberOfEvents={this.state.numberOfEvents}
          updateNumberOfEvents={(numberOfEvents) => this.updateNumberOfEvents(numberOfEvents)} />
        <EventList events={this.state.events} />
      </div>
    );
  }
}

export default App;

