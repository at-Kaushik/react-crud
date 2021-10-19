import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosConfig from "../axiosConfig";

export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
  const response = await axiosConfig.get("/users");
  return response;
});

export const addUser = createAsyncThunk("users/addUser", async (payload, ) => {
    const response = await axiosConfig.post("/users", payload);
    return response;
});

const usersSlice = createSlice({
  name: "users",
  initialState: {
    entities: [],
    loading: false,
  },
  reducers: {
      resetData(state) {
        state.entities = []
      },
      userDeleted(state, action) {
        const { id } = action.payload;
        const existingUser = state.entities.find((user) => user.id === id);
        if (existingUser) {
          state.entities = state.entities.filter((user) => user.id !== id);
        }
      },
  },
  extraReducers: {
    [fetchUsers.pending]: (state) => {
      state.loading = true;
    },
    [fetchUsers.fulfilled]: (state, action) => {
      state.loading = false;
      state.entities = [...state.entities, ...action.payload.data];
    },
    [fetchUsers.rejected]: (state) => {
      state.loading = false;
    },
    [addUser.fulfilled]: (state, action) => {
        state.entities.push(action.payload.data);
    }
  },
});

export const { userAdded, resetData, userDeleted } = usersSlice.actions;

export default usersSlice.reducer;