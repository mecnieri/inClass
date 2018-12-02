import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
import App, { handlePlus, handleMinus, Value } from './App';

import { mount, render, shallow, configure } from 'enzyme'

// global.mount = mount;
// global.render = render;
// global.shallow = shallow;

import Adapter from 'enzyme-adapter-react-16'

configure({ adapter: new Adapter() });

/*
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
*/

// Mock functions 



describe("Custom functions test", () => {


  it('Decrement works, state value -1', () => {
    const state = { count: 0 };
    const newState = handleMinus(state);

    expect(newState.count).toEqual(-1);
  })
  it('Increment works, state value +1', () => {
    const state = { count: 0 };
    const newState = handlePlus(state);

    expect(newState.count).toEqual(1);
  })
})



describe("App Component Test, Enzyme", () => {
  it("Rendes Value", () => {

    const Container = shallow(<App />);

    expect(Container.find(Value)).toHaveLength(1)

  })

  it("Value component Props Check", () => {
    const Container = shallow(<App />);
    let ValueComponent = Container.find(Value);

    expect(ValueComponent.props().count).toEqual(0)

    Container.setState({ count: 7 });

    ValueComponent = Container.find(Value);

    expect(ValueComponent.props().count).toEqual(7)
  })

  it('Tests Increment Button', () => {
    const Container = shallow(<App />)
    Container.setState({ count: 0 })
    Container.find('button').at(0).simulate('click')
    expect(Container.state().count).toEqual(1)
  })

  it('Tests Decrement Button', () => {
    const Container = shallow(<App />)
    Container.setState({ count: 0 })
    Container.find('button').at(1).simulate('click')
    expect(Container.state().count).toEqual(-1)
  })
})
