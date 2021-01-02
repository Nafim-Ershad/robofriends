import {CHANGE_SEARCH_FIELD} from './constants'

const initialState = {
	searchField: ""
}

export const searchRobots = (state=initialState, action={}) => {
	switch(action.type){
		case: CHANGE_SEARCH_FIELD:
			return Object.assign({}, state, searchField: action.payload);	//makes a new object with an empty object, initial state/values of object, what needs to be chnaged
		default: 
			return state;
	}
}