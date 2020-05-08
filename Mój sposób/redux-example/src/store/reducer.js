export const ADD_TO_ORDED = "ADD_TO_ORDED";

const initialState = {
  order: ["jjj", "zzz"],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_ORDED": {
      const newOrder = [...state.order, action.payload];
      return {
        ...state,
        order: newOrder,
      };
    }
    default: {
      console.log(`Unknown action ${action.type}`);
      return {
        ...state,
      };
    }
  }
};

export const AddToOrder = (order, dispatch) => {
  dispatch({ type: ADD_TO_ORDED, payload: order });
};
