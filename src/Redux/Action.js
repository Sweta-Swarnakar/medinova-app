import axios from "axios";
import {GET_DOCTOR_FAILURE,GET_DOCTOR_REQ, GET_DOCTOR_SUCCESS,   GET_CLICKED_DOCTOR_REQ, GET_CLICKED_DOCTOR_SUCCESS, FILTER_DATA, SEARCH_TERM} from "./ActionType";


export const getDoctorRequest = () => ({
  type: GET_DOCTOR_REQ,
});

export const getDoctorSuccess = (payload) => ({
  type: GET_DOCTOR_SUCCESS,
  payload,
});

export const getDoctorFailure = () => ({
  type: GET_DOCTOR_FAILURE,
});

export const filterByCat = (payload) => ({
  type: FILTER_DATA,
  payload,
});

export const searching = (payload) => ({
  type: SEARCH_TERM,
  payload,
});

// thunk call to fetch DOCTOR list
export const getDoctorData = () => {
  return (dispatch) => {
    dispatch(getDoctorRequest());
    axios
      .get("http://localhost:3000/doctors")
      .then((res) => {
        dispatch(getDoctorSuccess(res.data));
      })
      .catch(() => {
        dispatch(getDoctorFailure());
      });
  };
};

export const getClickedDoctorRequest = () => ({
  type: GET_CLICKED_DOCTOR_REQ,
});
export const getClickedDoctorSuccess = (payload) => {
  // console.log(payload.data);
  return {
    type: GET_CLICKED_DOCTOR_SUCCESS,
    payload,
  };
};
export const getClickedDoctorFailure = () => ({
  type: GET_DOCTOR_FAILURE,
});

export const getClickedDoctorData = (id) => {
  return (dispatch) => {
    dispatch(getClickedDoctorRequest());
    axios
      .get(`http://localhost:3000/doctors/${id}`)
      .then((res) => {
        dispatch(getClickedDoctorSuccess(res.data));
      })
      .catch((err) => {
        console.log(err)
        dispatch(getClickedDoctorFailure());
      });
  };
};


