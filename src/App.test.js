import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import App from "./App";

Enzyme.configure({adapter: new EnzymeAdapter()});

test('App renders without crash', () => {
    const wrapper = shallow(<App />); // wrappuje <App /> component, moze wrappowac zawsze o 1 poziom w doł, oczywiscie JSX
    const appComponent = wrapper.find("[data-test='component-app']"); // tak jakby selector z App
    expect(appComponent.length).toBe(1); // oczekujemy ze bedzie 1 element
});

test('App renders incremnet button', () =>{

});

test('renders counter display', () =>{

});

test('counter start at 0', () =>{

});

test('clicking button increment a display', () =>{

});