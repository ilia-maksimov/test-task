import { SET_FIELD, CHANGE_PLAYER, SET_NEW_ARRAY } from './app.actions';

const initialState = {
	isPlayerMove: true,
	field: null
}

export const appReducer = (state = initialState, action) => {
	switch(action.type) {
		case SET_FIELD:
			return {
				...state,
				field: action.field
			}
		case CHANGE_PLAYER:
			return {
				...state,
				isPlayerMove: action.isPlayerMove
			}
		case SET_NEW_ARRAY:
			return {
				...state,
				field: action.newArray
			}
		default:
			return state
	}
}