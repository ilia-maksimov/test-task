import { SET_FIELD, CHANGE_PLAYER, SET_NEW_ARRAY, SET_WINNER } from './app.actions';

const initialState = {
	isPlayerMove: true,
	field: null,
	winner: null
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
		case SET_WINNER:
			return {
				...state,
				winner: action.winner
			}
		default:
			return state
	}
}