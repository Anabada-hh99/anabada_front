import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import instance from '../../shared/request';

export const __getPost = createAsyncThunk('GET_POST', async (arg, thunkAPI) => {
  try {
    console.log('IM GONNA REQUEST ONE POST DATA...');
    const { data } = await instance.get(`/post/${arg}`);
    console.log(data);
    return thunkAPI.fulfillWithValue(data.data);
  } catch (error) {
    return thunkAPI.rejectWithValue(error.code);
  }
});

export const __getPosts = createAsyncThunk(
  'GET_POSTS',
  async (arg, thunkAPI) => {
    try {
      console.log('IM GONNA REQUEST POSTS DATA...');
      console.log(`with this final api url: /post${arg}`);
      const { data } = await instance.get(`/post${arg}`);
      console.log(data);
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.code);
    }
  }
);

export const __deletePost = createAsyncThunk(
  'DELETE_POST',
  async (arg, thunkAPI) => {
    try {
      await instance.delete(`/posts/${arg}`);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.code);
    }
  }
);

const initialState = {
  post: {
    data: {},
    isLoading: false,
    error: null,
  },
  posts: {
    data: [],
    isLoading: false,
    error: null,
  },
};

export const postSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    CLEAR_POSTS: (state) => {
      console.log('CLEARING POSTS!');
      state.posts = {
        data: [],
        isLoading: false,
        error: null,
      };
    },
  },
  extraReducers: {
    // 상세 게시글 조회하기
    [__getPost.pending]: (state) => {
      state.post.isLoading = true;
    },
    [__getPost.fulfilled]: (state, action) => {
      state.post.isLoading = false;
      state.post.data = action.payload;
    },
    [__getPost.rejected]: (state, action) => {
      state.post.isLoading = false;
      state.post.error = action.payload;
    },
    // 쿼리로 게시글목록 받아오기
    [__getPosts.pending]: (state) => {
      state.posts.isLoading = true;
    },
    [__getPosts.fulfilled]: (state, action) => {
      state.posts.isLoading = false;
      //console.log(action.payload);
      state.posts.data = state.posts.data.concat(action.payload);
    },
    [__getPosts.rejected]: (state, action) => {
      state.posts.isLoading = false;
      state.posts.error = action.payload;
    },
  },
});

export const { CLEAR_POSTS } = postSlice.actions;
export default postSlice.reducer;
