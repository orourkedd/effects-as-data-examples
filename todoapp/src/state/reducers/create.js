import * as constants from '../constants'

const initialState = {
	content: ''
}

export default function create(state = initialState, action = {}) {
	switch (action.type) {
		case constants.NEW_TODO_SET_CONTENT:
			return {
				...state,
				content: action.payload
			}

		default:
			return state
	}
}
