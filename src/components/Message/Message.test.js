import React from 'react';
import { shallow } from 'enzyme';

import Message from './';

describe('<Message />', () => {
	it('renders', () => {
		shallow(<Message />);
	});
});
