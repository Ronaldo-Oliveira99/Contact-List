const initialState = {
  contacts: JSON.parse(localStorage.getItem("contacts")) || []
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_USER": {
      const newContact = {
        id: Math.floor(Math.random() * 100000),
        nome: action.payload.nome,
        email: action.payload.email
      };
      const newContacts = [...state.contacts, newContact];
      localStorage.setItem("contacts", JSON.stringify(newContacts));
      return {
        ...state,
        contacts: newContacts
      };
    }
    case "DELETE_USER": {
      const newContacts = state.contacts.filter(
        contact => contact.id !== action.contact.id
      );
      localStorage.setItem("contacts", JSON.stringify(newContacts));
      return {
        ...state,
        contacts: newContacts
      };
    }
    case "EDIT_USER": {
      const newContacts = state.contacts.map(contact => {
        if (contact.id === action.payload.id) {
          return action.payload;
        }
        return contact;
      });
      localStorage.setItem("contacts", JSON.stringify(newContacts));
      return {
        ...state,
        contacts: newContacts
      };
    }

    default:
      return state;
  }
};

export default reducer;
