import React from 'react';
import { shallow } from 'enzyme';
import configureMockStore from 'redux-mock-store';
import { Provider } from 'react-redux';

import MessagesList from './';

const mockStore = configureMockStore();

describe('<MessagesList />', () => {
	let store;

	beforeEach(() => {
		store = mockStore();
	});

	it('connects', () => {
		shallow(
			<Provider store={store}>
				<MessagesList />
			</Provider>,
	    );
	});
});
