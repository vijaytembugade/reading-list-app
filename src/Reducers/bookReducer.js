export const bookReducer = (state, action) => {
  switch (action.type) {
    case "ADD_BOOK":
      return [...state, { title: action.book.title, id: Math.random() }];
    case "REMOVE_BOOK":
        return state.filter(book=> book.id !== action.id)
    default :
        return state
  }
};
