import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import App from './App';

Enzyme.configure({ adapter: new EnzymeAdapter() });

/**
 * Factory function to create a ShallowWrapper for the App component
 *  @function setup
 * @param {object} props - component props to specific setop
 * @param {any} state - init state
 * @return {ShallowWrapper}
 */
const setup = (props = {}, state = null) => {
	return shallow(<App {...props} />);
};

/**
 * Factory function to create a ShallowWrapper for the App component
 *  @function findByTestAttr
 * @param {ShallowWrapper} wrapper - component props to specific setop
 * @param {string} value - init state
 * @return {ShallowWrapper}
 */
const findByTestAttr = (wrapper, value) => {
	return wrapper.find(`[data-test='${value}']`);
};

test('App renders without crash', () => {
	// const wrapper = shallow(<App />); // wrappuje <App /> component, moze wrappowac zawsze o 1 poziom w doł, oczywiscie JSX
	const wrapper = setup();
	// const appComponent = wrapper.find("[data-test='component-app']"); // tak jakby selector z App
	const appComponent = findByTestAttr(wrapper, 'component-app');
	expect(appComponent.length).toBe(1); // oczekujemy ze bedzie 1 element
});

test('App renders incremnet button', () => {
	const wrapper = setup();
	const incrementButton = findByTestAttr(wrapper, 'increment-button');
	expect(incrementButton.length).toBe(1);
});

test('App renders counter display', () => {
	const wrapper = setup();
	const counterDisplay = findByTestAttr(wrapper, 'counter-display');
	expect(counterDisplay.length).toBe(1);
});

test('counter start at 0', () => {});

test('clicking button increment a display', () => {});
