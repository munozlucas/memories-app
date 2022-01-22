import { FETCH_ALL, SEARCH, CREATE, DELETE, UPDATE, START_LOADING, END_LOADING, FETCH_POST } from "../constants/actionTypes";

const initialState = {
  posts: [],
  currentPage: 1,
  totalPages: 0,
  isLoading: false,
  post: null
};

const posts = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ALL:
      return {
        ...state,
        posts: action.payload.data,
        currentPage: action.payload.page,
        totalPages: action.payload.totalPages,
      };
    case SEARCH:
      return {
        ...state,
        posts: action.payload,
      };
    case FETCH_POST:
      return {
        ...state,
        post: action.payload,
      };
    case CREATE:
      return {
        ...state,
        posts: [...state.posts, action.payload],
      };
    case UPDATE:
      return {
        ...state,
        posts: state.posts.map((post) => (post._id === action.payload._id ? action.payload : post)),
      };
    case DELETE:
      return {
        ...state,
        posts: state.posts.filter((post) => post._id !== action.payload),
      };
    case START_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case END_LOADING:
      return {
        ...state,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default posts;
