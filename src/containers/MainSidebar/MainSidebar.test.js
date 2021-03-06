import React from 'react';
import { shallow } from 'enzyme';
import configureMockStore from 'redux-mock-store';
import { Provider } from 'react-redux';

import MainSidebar from './';

const mockStore = configureMockStore();

describe('<MainSidebar />', () => {
	let store;

	beforeEach(() => {
		store = mockStore();
	});

	it('connects', () => {
		shallow(
			<Provider store={store}>
				<MainSidebar />
			</Provider>,
	    );
	});
});
