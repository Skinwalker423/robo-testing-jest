import * as reducers from './reducers';

import {
	CHANGE_SEARCHFIELD,
	REQUEST_ROBOTS_PENDING,
	REQUEST_ROBOTS_SUCCESS,
	REQUEST_ROBOTS_FAILED,
} from './constants';

describe('searchRobots', () => {
	const initialStateSearch = {
		searchField: '',
	};

	it('should return initial state', () => {
		expect.assertions(1);
		expect(reducers.searchRobots(undefined, {})).toEqual({ searchField: '' });
	});

	it('should handle CHANGE_SEARCHFIELD', () => {
		expect.assertions(4);
		expect(
			reducers.searchRobots({ searchField: 'test' }, CHANGE_SEARCHFIELD)
		).toEqual({ searchField: 'test' });
		expect(reducers.searchRobots('1234', CHANGE_SEARCHFIELD)).toEqual('1234');
		expect(reducers.searchRobots(undefined, CHANGE_SEARCHFIELD)).toEqual({
			searchField: '',
		});
		expect(
			reducers.searchRobots(initialStateSearch, {
				type: CHANGE_SEARCHFIELD,
				payload: 'new test',
			})
		).toEqual({
			searchField: 'new test',
		});
	});
});

describe('requestRobots', () => {
	const initialStateRobots = {
		robots: [],
		isPending: false,
	};

	it('should return initialStateRobots', () => {
		expect(reducers.requestRobots(undefined, {})).toEqual(initialStateRobots);
	});
	it('should handle REQUEST_ROBOTS_PENDING', () => {
		const mockRobotsState = [
			{
				name: 'Robocop',
				id: 1,
			},
			{
				name: 'Terminator',
				id: 2,
			},
		];
		expect(
			reducers.requestRobots(initialStateRobots, {
				type: REQUEST_ROBOTS_PENDING,
			})
		).toEqual({
			isPending: true,
			robots: [],
		});
	});
	it('should handle REQUEST_ROBOTS_SUCCESS', () => {
		const mockRobotsState = [
			{
				name: 'Robocop',
				id: 1,
			},
			{
				name: 'Terminator',
				id: 2,
			},
		];
		expect(
			reducers.requestRobots(initialStateRobots, {
				type: REQUEST_ROBOTS_SUCCESS,
				payload: mockRobotsState,
			})
		).toEqual({
			isPending: false,
			robots: mockRobotsState,
		});
		expect(
			reducers.requestRobots(initialStateRobots, {
				type: REQUEST_ROBOTS_SUCCESS,
				payload: [],
			})
		).toEqual({
			isPending: false,
			robots: [],
		});
	});
});
