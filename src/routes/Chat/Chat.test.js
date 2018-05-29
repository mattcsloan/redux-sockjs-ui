import React from 'react';
import { shallow } from 'enzyme';

import Chat from './index';

describe('<Chat />', () => {
	it('renders', () => {
		shallow(<Chat />);
	});
});
