import { createSlice } from '@reduxjs/toolkit';


const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [],
    filter: '',
  },
  reducers: {
    addContact(state, action) {
      return {
        ...state,
        contacts: [...state.contacts, action.payload],
      };
    },
    deleteContact(state, action) {
      return {
        ...state,
        contacts: state.contacts.filter(
          ({ name }) => name !== action.payload.name
        ),
      };
    },
    filterContacts(state, action) {
      state.filter = action.payload;
    },
  },
});

export const addContact = contactsSlice.actions.addContact;
export const deleteContact = contactsSlice.actions.deleteContact;
export const filterContacts = contactsSlice.actions.filterContacts;

export const contactsReducer = contactsSlice.reducer;
