import React from 'react';
import { shallow } from 'enzyme';
import configureMockStore from 'redux-mock-store';
import { Provider } from 'react-redux';

import AddMessage from './';

const mockStore = configureMockStore();

describe('<AddMessage />', () => {
	let store;

	beforeEach(() => {
		store = mockStore();
	});

	it('connects', () => {
		shallow(
			<Provider store={store}>
				<AddMessage />
			</Provider>,
	    );
	});
});
