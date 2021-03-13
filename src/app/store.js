import { applyMiddleware, configureStore } from '@reduxjs/toolkit';
import postsReducer from '../features/postsSlice';
import usersReducer from '../features/users/usersSlice';
import thunk from 'redux-thunk';
const middlewareEnchanter = applyMiddleware(thunk)
export default configureStore({
  reducer: {
    posts:postsReducer,
    users:usersReducer
  },
  middleware:{
    middlewareEnchanter
  }
});
