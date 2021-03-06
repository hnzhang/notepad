import * as constants from '../constants/index';

const initialState = {
	notes: [
		{
			id: '2588',
			title: 'An example node',
			details: "this is an example of note"
		},
		{
			id:'030030',
			title:"another example of note",
			details:"halloa adf ad fadfadsf"
		}
	],
	name:"Harry's node"
};

//defintion of the root reducer
export default (state = initialState, action) => {
	switch(action.type){
		case constants.ADD_NOTE:
			return {
				...state,
				notes: [...state.notes, action.note]
			};
		case constants.REMOVE_NOTE:
			return {
				...state,
				notes: state.notes.filter(note => note !== action.note)
			}
		case constants.GET_NOTES:
			return {
				...state,
			}
		default:
			return state; 
	}
};