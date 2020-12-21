const INITIAL_STATE = {
    contacts:[]
}
export function contactReducer(state=INITIAL_STATE,action){
    switch (action.type) {
        case 'SET_CONTACTS':
            return {
                ...state,
                contacts:action.contacts
            }
        case 'REMOVE_CONTACT':
            return {
                ...state,
                contacts:state.contacts.filter(contact => contact._id !== action.contactId)
            }
        case 'ADD_CONTACT':
            return{
                ...state,
                contacts:[...state.contacts,action.contact]
            }
        case 'UPDATE_CONTACT':
            return {
                ...state,
                contacts:state.contacts.map(contact=> (contact._id === action.contact._id) ? action.contact : contact)
            }        
        default:
            return state;
    }
}