// reducers/menureducer.js
const initialState = {
  menu: [],
};

const menureducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        menu: [...state.menu, action.payload], // Add item to cart
      };

    case "REMOVE_FROM_CART":
      return {
        ...state,
        menu: state.menu.filter((item) => item.id !== action.payload),
      };

    default:
      return state;
  }

  
};

export default menureducer;
