import React from 'react';
import { shallow } from 'enzyme';

import AddMessage from './';

describe('<AddMessage />', () => {
	it('renders', () => {
		shallow(<AddMessage />);
	});
});
