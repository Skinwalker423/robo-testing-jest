import React from 'react';
import { shallow } from 'enzyme';
import Card from './Card';

expect.assertions(2);
it('renders without crashing', () => {
	expect(shallow(<Card />)).toMatchSnapshot();
	expect(shallow(<Card />).length).toEqual(1);
});
