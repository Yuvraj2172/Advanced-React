import { data } from "../../../data";
import { REMOVE_ITEM, RESET_LIST, CLEAR_LIST } from "./actions";
const reducer = (state, action) => {
    if (action.type === CLEAR_LIST) {
      return { ...state, people: [], isLoading: false };
    }
    if (action.type === RESET_LIST) {
      return { ...state, people: data, isLoading: true };
    }
    if (action.type === REMOVE_ITEM) {
      console.log(action);
      const newData = state.people.filter(
        (people) => people.id !== action.payload.id
      );
      return { ...state, people: newData, isLoading: false };
    }
  
    throw new Error(`No Matching "${action.type}" action-type`);
  };

  export default reducer;