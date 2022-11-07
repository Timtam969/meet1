import React from 'react';
import { shallow } from 'enzyme';
import NumberOfEvents from '../NumberOfEvents';


describe('<NumberOfEvents /> component', () => {

  let NumberOfEventsWrapper;
  beforeAll(() => {
    NumberOfEventsWrapper = shallow(<NumberOfEvents updateEvents={() => { }} />);
  });

  test('display 32 events by default', () => {
    expect(
      NumberOfEventsWrapper.find('.number-of-events').get(0).props.value
    ).toEqual(32);
  });

  test('display 32 events if user inputs number outside of range', () => {
    NumberOfEventsWrapper.find('.number-of-events').simulate(
      'change', { target: { value: 50 } }
    );
    expect(NumberOfEventsWrapper.state('numberOfEvents')).toEqual(32);
  });


  test('display chosen number of events if in range', () => {
    NumberOfEventsWrapper.find('.number-of-events').simulate(
      'change', { target: { value: 8 } }
    );
    expect(NumberOfEventsWrapper.state('numberOfEvents')).toEqual(8);
  });


  test('change numberOfEvents when input changes', () => {
    NumberOfEventsWrapper.setState({ numberOfEvents: 15 });
    NumberOfEventsWrapper.find('.number-of-events').simulate('change', { target: { value: 5 } });
    expect(NumberOfEventsWrapper.state('numberOfEvents')).not.toEqual(undefined);
    expect(NumberOfEventsWrapper.state('numberOfEvents')).toEqual(5);
  });

});  