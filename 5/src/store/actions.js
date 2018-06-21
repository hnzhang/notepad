 export const getInitialNotes = () =>{
	 return {
		 type: 'GET_NOTES'
	 }
 };

 export const addNote  = (note) =>{
	return {
		type: 'ADD_NOTE',
		note
	}
 }
 export const removeNote = (note) =>{
	 return {
		 type: 'REMOVE_NOTE',
		 note
	 }
 };

 

