import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import instance from '../../shared/request';

export const __getPost = createAsyncThunk('GET_POST', async (arg, thunkAPI) => {
  try {
    //console.log('IM GONNA REQUEST ONE POST DATA...');
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
      //console.log('IM GONNA REQUEST POSTS DATA...');
      //console.log(`with this final api url: /post${arg}`);
      const { data } = await instance.get(`/post${arg}`);
      //console.log(data);
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
      //console.log('JUST BEFORE DELETE.. plz wait');
      instance.defaults.headers.delete['Authorization'] = arg.Authorization;
      instance.defaults.headers.delete['refresh_token'] = arg.refresh_token;
      await instance.delete(`/post/${arg.postId}`);
      return thunkAPI.fulfillWithValue(arg.postId);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.code);
    }
  }
);

export const __updatePost = createAsyncThunk(
  'UPDATE_POST',
  async (arg, thunkAPI) => {
    try {
      instance.defaults.headers.put['Authorization'] = arg.Authorization;
      instance.defaults.headers.put['refresh_token'] = arg.refresh_token;
      await instance.put(`/post/${arg.postId}`, arg.body);
      return thunkAPI.fulfillWithValue(arg.body);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.code);
    }
  }
);

export const __createPost = createAsyncThunk(
  'CREATE_POST',
  async (arg, thunkAPI) => {
    try {
      instance.defaults.headers.post['Authorization'] = arg.Authorization;
      instance.defaults.headers.post['refresh_token'] = arg.refresh_token;
      await instance.post('/post/create', arg.body);
      return thunkAPI.fulfillWithValue(arg.body);
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
    CLEAR_POST: (state) => {
      //console.log('CLEARING ONE POST!');
      state.posts = {
        data: {},
        isLoading: false,
        error: null,
      };
    },
    CLEAR_POSTS: (state) => {
      //console.log('CLEARING POSTS!');
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
      state.posts.data = state.posts.data.concat(action.payload);
      state.posts.data = Array.from(new Set(state.posts.data));
    },
    [__getPosts.rejected]: (state, action) => {
      state.posts.isLoading = false;
      state.posts.error = action.payload;
    },
    // 게시글 삭제하기
    [__deletePost.pending]: (state) => {
      state.post.isLoading = true;
    },
    [__deletePost.fulfilled]: (state, action) => {
      state.post.isLoading = false;
      state.post.data = {};
      const target = state.posts.data.findIndex(
        (item) => item.id === action.payload
      );
      state.posts.data.splice(target, 1);
    },
    [__deletePost.rejected]: (state, action) => {
      state.post.isLoading = false;
      console.log(action.payload);
      state.post.error = action.payload;
    },
    // 게시글 수정하기
    [__updatePost.pending]: (state) => {
      state.post.isLoading = true;
    },
    [__updatePost.fulfilled]: (state, action) => {
      state.post.isLoading = false;
      state.post.data = action.payload;
      const target = state.posts.data.findIndex(
        (item) => item.id === action.payload.id
      );
      state.posts.data.splice(target, 1, action.payload);
    },
    [__updatePost.rejected]: (state, action) => {
      state.post.isLoading = false;
      state.commentsByFeedId.error = action.payload;
    },
    // 게시글 작성하기
    [__createPost.pending]: (state) => {
      state.post.isLoading = true;
    },
    [__createPost.fulfilled]: (state, action) => {
      state.post.isLoading = false;
      //state.posts.data = [action.payload, ...state.posts.data];
    },
    [__createPost.rejected]: (state, action) => {
      state.post.isLoading = false;
      state.commentsByFeedId.error = action.payload;
    },
  },
});

export const { CLEAR_POST, CLEAR_POSTS } = postSlice.actions;
export default postSlice.reducer;
