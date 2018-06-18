import { SET_FIELD } from './app.actions';

const initialState = {
	field: []
}

export const appReducer = (state = initialState, action) => {
	switch(action.type) {
		case SET_FIELD:
			return {
				...state,
				field: action.field
			}
		default:
			return state
	}
}