import React from 'react';
import { shallow } from 'enzyme';

import MainContent from './';

describe('<MainContent />', () => {
	it('renders', () => {
		shallow(<MainContent />);
	});
});
