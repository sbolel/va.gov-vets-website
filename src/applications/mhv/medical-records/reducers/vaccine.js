import { Actions } from '../util/actionTypes';

const initialState = {
  /**
   * The list of vaccines returned from the api
   * @type {array}
   */
  vaccineList: undefined,
  /**
   * The vaccine currently being displayed to the user
   */
  vaccineDetails: undefined,
};

export const vaccineReducer = (state = initialState, action) => {
  switch (action.type) {
    case Actions.Vaccines.GET: {
      return {
        ...state,
        vaccineDetails: state.vaccineList.filter(
          vaccine => vaccine.vaccineId === action.vaccineId,
        )[0],
      };
    }
    case Actions.Vaccines.GET_LIST: {
      return {
        ...state,
        vaccineList: action.response.map(vaccine => {
          return { ...vaccine };
        }),
      };
    }
    default:
      return state;
  }
};