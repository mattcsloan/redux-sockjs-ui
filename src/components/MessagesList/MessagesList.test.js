import React from 'react';
import { shallow } from 'enzyme';

import MessagesList from './';

describe('<MessagesList />', () => {
	it('renders', () => {
		shallow(<MessagesList />);
	});
});
