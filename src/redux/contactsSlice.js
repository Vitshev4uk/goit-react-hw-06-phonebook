import { createSlice } from '@reduxjs/toolkit';

const contactsInitialState = [];

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  // initialState: [],
  reducers: {
    addContact(state, action) {
      return [...state, action.payload];
    },
    deleteContact(state, action) {
      return state.filter(({ name }) => name !== action.payload.name);
    },
  },
});

export const addContact = contactsSlice.actions.addContact;
export const deleteContact = contactsSlice.actions.deleteContact;

export const contactsReducer = contactsSlice.reducer;
