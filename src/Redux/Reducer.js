import {
  
  GET_DOCTOR_FAILURE,
  GET_DOCTOR_REQ,
  GET_DOCTOR_SUCCESS,
  FILTER_DATA,
  GET_CLICKED_DOCTOR_FAILURE,
  GET_CLICKED_DOCTOR_REQ,
  GET_CLICKED_DOCTOR_SUCCESS,
} from "./ActionType";

const initState = {
  data: [],
  filteredData: [],
  isLoading: false,
  isError: false,
  selectedData:{}
};

export const Reducer = (state = initState, { type, payload }) => {

  switch (type) {
    case GET_DOCTOR_REQ:
      return {
        ...state,
        isLoading: true,
      };
    case GET_DOCTOR_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: [...payload],
        filteredData: [...payload],
        isError: false,
      };
    case GET_DOCTOR_FAILURE:
      return {
        ...state,
        isLoading: false,
        data: [],
        isError: true,
      };

    case FILTER_DATA:
      return {
        ...state,
        filteredData: state.data.filter((el) => {
          let category = el.Speciality
          return category.indexOf(payload) != -1;
        }),
      };

    case GET_CLICKED_DOCTOR_REQ:
      return {
        ...state,
        isLoading: true,
      };
    case GET_CLICKED_DOCTOR_SUCCESS:
      return {
        ...state,
        isLoading: false,
        selectedData: payload,
        isError: false,
      };
    case GET_CLICKED_DOCTOR_FAILURE:
      return {
        ...state,
        isLoading: false,
        selectedData: {},
        isError: true,
      };
    default:
      return state;
  }
};
