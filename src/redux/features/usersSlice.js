import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchUsersAPI } from "../../services/usersService";

export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
  return await fetchUsersAPI();
});

export const addUsers = createAsyncThunk(
  "users/addUsers",
  async (user, { rejectWithValue }) => {
    try {
      const { data, error } = await supabase.from("users").insert([item]);

      if (error) throw error;

      return data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

const usersSlice = createSlice({
  name: "users",
  initialState: {
    users: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.users = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default usersSlice.reducer;
