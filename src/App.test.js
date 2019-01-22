import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import ReactDOM from 'react-dom';
import App from "./App";

Enzyme.configure({adapter: new EnzymeAdapter()});

test('Apps render without crashes', () => {
    const wrapper = shallow(<App />); // wrappuje <App /> component, moze wrappowac zawsze o 1 poziom w doł, oczywiscie JSX
    expect(wrapper).toBeTruthy();
});

test('Fake test', () => {
    expect(true).toBeTruthy();
});
