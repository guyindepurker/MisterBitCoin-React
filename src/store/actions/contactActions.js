import { contactService } from '../../services/ContactService';
export function loadContacts(filterBy) {
  return async (dispatch) => {
    const contacts = await contactService.getContacts(filterBy);
    dispatch({ type: 'SET_CONTACTS', contacts });
  };
}

export function removeContact(contactId) {
  return async (dispatch) => {
    await contactService.deleteContact(contactId);
    dispatch({ type: 'REMOVE_CONTACT', contactId });
  };
}
export function addContact(contact) {
  return async (dispatch) => {
    const savedContact = await contactService.saveContact(contact);
    dispatch({ type: 'ADD_CONTACT', contact: savedContact });
  };
}
export function updateContact(contact) {
  return async (dispatch) => {
    const savedContact = await contactService.saveContact(contact);
    dispatch({ type: 'UPDATE_CONTACT', contact: savedContact });
  };
}
