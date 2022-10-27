import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import instance from '../../shared/request';

export const __getComments = createAsyncThunk(
  'GET_COMMENTS',
  async (arg, thunkAPI) => {
    try {
      //console.log('IM GONNA REQUEST COMMENTS DATA...');
      //console.log(`with this final api url: /comments/${arg}`);
      const { data } = await instance.get(`/comments/${arg}`);
      //console.log(data);
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.code);
    }
  }
);

export const __deleteComment = createAsyncThunk(
  'DELETE_COMMENT',
  async (arg, thunkAPI) => {
    try {
      console.log('JUST BEFORE DELETE COMMENT.. plz wait');
      instance.defaults.headers.delete['Authorization'] = arg.Authorization;
      instance.defaults.headers.delete['refresh_token'] = arg.refresh_token;
      await instance.delete(`/comments/${arg.commentId}`);
      return thunkAPI.fulfillWithValue(arg.commentId);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.code);
    }
  }
);

export const __updateComment = createAsyncThunk(
  'UPDATE_COMMENT',
  async (arg, thunkAPI) => {
    try {
      instance.defaults.headers.put['Authorization'] = arg.Authorization;
      instance.defaults.headers.put['refresh_token'] = arg.refresh_token;
      await instance.put(`/comments/${arg.body.commentId}`, arg.body);
      return thunkAPI.fulfillWithValue(arg.body);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.code);
    }
  }
);

export const __createComment = createAsyncThunk(
  'CREATE_COMMENT',
  async (arg, thunkAPI) => {
    try {
      console.log('lets creat comment');
      instance.defaults.headers.post['Authorization'] = arg.Authorization;
      instance.defaults.headers.post['refresh_token'] = arg.refresh_token;
      const { data } = await instance.post('/comments', arg.body);
      console.log(data.data);
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.code);
    }
  }
);

const initialState = {
  comments: {
    data: [],
    isLoading: false,
    error: null,
  },
};

export const commentSlice = createSlice({
  name: 'comments',
  initialState,
  reducers: {
    CLEAR_COMMENTS: (state) => {
      console.log('CLEARING COMMENTS!');
      state.comments = {
        data: [],
        isLoading: false,
        error: null,
      };
    },
  },
  extraReducers: {
    // 쿼리로 댓글목록 받아오기
    [__getComments.pending]: (state) => {
      state.comments.isLoading = true;
    },
    [__getComments.fulfilled]: (state, action) => {
      state.comments.isLoading = false;
      state.comments.data = action.payload;
    },
    [__getComments.rejected]: (state, action) => {
      state.comments.isLoading = false;
      state.comments.error = action.payload;
    },
    // 댓글 삭제하기
    [__deleteComment.pending]: (state) => {
      state.comments.isLoading = true;
    },
    [__deleteComment.fulfilled]: (state, action) => {
      state.comments.isLoading = false;
      console.log(action.payload);
      const target = state.comments.data.findIndex(
        (comment) => comment.commentId === action.payload
      );
      state.comments.data.splice(target, 1);
    },
    [__deleteComment.rejected]: (state, action) => {
      state.comments.isLoading = false;
      state.comments.error = action.payload;
    },
    // 댓글 수정하기
    [__updateComment.pending]: (state) => {
      state.comments.isLoading = true;
    },
    [__updateComment.fulfilled]: (state, action) => {
      state.comments.isLoading = false;
      const target = state.comments.data.findIndex(
        (comment) => comment.commentId === action.payload.commentId
      );
      state.comments.data.splice(target, 1, action.payload);
    },
    [__updateComment.rejected]: (state, action) => {
      state.comments.isLoading = false;
      state.comments.error = action.payload;
    },
    // 댓글 작성하기
    [__createComment.pending]: (state) => {
      state.comments.isLoading = true;
    },
    [__createComment.fulfilled]: (state, action) => {
      state.comments.isLoading = false;
      state.comments.data = [action.payload, ...state.comments.data];
    },
    [__createComment.rejected]: (state, action) => {
      state.comments.isLoading = false;
      state.comments.error = action.payload;
    },
  },
});

export const { CLEAR_COMMENTS } = commentSlice.actions;
export default commentSlice.reducer;
