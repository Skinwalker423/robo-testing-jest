import { setSearchField, requestRobots } from './actions';

import {
	CHANGE_SEARCHFIELD,
	REQUEST_ROBOTS_PENDING,
	REQUEST_ROBOTS_SUCCESS,
	REQUEST_ROBOTS_FAILED,
} from './constants';

import thunkMiddleware from 'redux-thunk';
import configureMockStore from 'redux-mock-store';

const mockStore = configureMockStore([thunkMiddleware]);

describe('setSearchField', () => {
	it('CHANGE_SEARCHFIELD', () => {
		expect(setSearchField('tests')).toEqual({
			type: CHANGE_SEARCHFIELD,
			payload: 'tests',
		});
		expect(setSearchField(undefined)).toEqual({
			type: CHANGE_SEARCHFIELD,
			payload: undefined,
		});
		expect(setSearchField('')).toEqual({
			type: CHANGE_SEARCHFIELD,
			payload: '',
		});
	});
});
describe('requestRobots', () => {
	it('handles request robots api', () => {
		const store = mockStore();
		store.dispatch(requestRobots());
		const action = store.getActions();
		expect(action[0]).toEqual({
			type: REQUEST_ROBOTS_PENDING,
		});
	});
});
