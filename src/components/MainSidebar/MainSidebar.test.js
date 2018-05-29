import React from 'react';
import { shallow } from 'enzyme';

import MainSidebar from './';

describe('<MainSidebar />', () => {
	it('renders', () => {
		shallow(<MainSidebar />);
	});
});
