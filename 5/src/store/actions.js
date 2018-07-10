import * as constants from '../constants/index';

 export const getInitialNotes = () =>{
	 return {
		 type: constants.GET_NOTES
	 }
 };

 export const addNote  = (note) =>{
	return {
		type: constants.ADD_NOTE,
		note
	}
 }
 export const removeNote = (note) =>{
	 return {
		 type: constants.REMOVE_NOTE,
		 note
	 }
 };

 

