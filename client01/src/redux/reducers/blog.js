import { 
  CREATE_BLOGS, 
  DELETE_BLOGS, 
  FETCH_ALL_BLOGS, 
  FETCH_BLOGS_BY_ID, 
  GET_AUTHOR_BLOGS,
  FETCH_BLOGS_BY_AUTHOR 
} from "../constants/actionTypes";

const initialState = {
  blogs: [], // Stores all blogs
  singleBlog: {}, // Stores a single blog
  authorBlogs: [], // Stores blogs filtered by author ID
};

export default (state = initialState, action) => {
  // console.log("Reducer Action Triggered:", action.type); // ✅ Debug log

  switch (action.type) {
    case FETCH_ALL_BLOGS:
      console.log("Updating all blogs in state."); // ✅ Debug log
      return { ...state, blogs: action.payload };

      case GET_AUTHOR_BLOGS:
        return { ...state, authorBlogs: action.payload };

    case CREATE_BLOGS:
      return { ...state, blogs: [...state.blogs, action.payload] };

    case FETCH_BLOGS_BY_ID:
      return { ...state, singleBlog: action.payload };

    case DELETE_BLOGS:
      return { 
        ...state, 
        blogs: state.blogs.filter((blog) => blog._id !== action.payload),
        authorBlogs: state.authorBlogs.filter((blog) => blog._id !== action.payload) 
      };

    default:
      return state;
  }
};
