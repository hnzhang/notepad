
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

export default (state = initialState, action) => {
	switch(action.type){
		case 'ADD_NOTE':
			return {
				...state,
				notes: [...state.notes, action.note]
			};
		case 'REMOVE_NOTE':
			return {
				...state,
				notes: state.notes.filter(note => note !== action.note)
			}
		case 'GET_NOTES':
			return {
				...state,
			}
		default:
			return state; 
	}
};