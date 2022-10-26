import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const __addmembersPostThunk = createAsyncThunk(
  "ADD_MEMBERPOST",
  async (payload, thunkAPI) => {
    try {
      const PostList = await axios.post("/api/members/posts", payload);
      return thunkAPI.fulfillWithValue(PostList.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
//export const __addmembersPostThunk
//

const initialState = {
  memberPost: {
    id: "",
    title: "",
    content: "",
    price: "",
    imgUrl: "",
  },
};

export const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {},
  extraReducers: {
    [__addmembersPostThunk.pending]: (state) => {
      state.isLoading = true;
    },
    [__addmembersPostThunk.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
      state.post = [...state.post, action.payload];
    },
    [__addmembersPostThunk.rejected]: (state, action) => {
      state.isLoading = false;
    },
  },
});

export const {} = postSlice.actions;
export default postSlice.reducer;
