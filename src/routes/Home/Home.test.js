import React from 'react';
import { shallow } from 'enzyme';

import Home from './';

describe('<Home />', () => {
	it('renders', () => {
		shallow(<Home />);
	});
});
