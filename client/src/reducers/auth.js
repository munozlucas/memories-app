import { AUTH, LOGOUT } from "../constants/actionTypes";

const authReducer = (state = { authData: null }, action) => {
  //TODO pasar localstorage a action
  switch (action.type) {
    case AUTH:
      //todo sacar de aca el localstorage
      localStorage.setItem("profile", JSON.stringify({ ...action.data }));

      return { ...state, authData: action.data, loading: false, errors: null };
    case LOGOUT:
      localStorage.clear();

      return { ...state, authData: null, loading: false, errors: null };
    default:
      return state;
  }
};

export default authReducer;
