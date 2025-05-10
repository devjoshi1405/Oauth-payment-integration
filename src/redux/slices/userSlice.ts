import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = 'http://localhost:5000/users';

interface User {
  id?: number;
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

interface UserState {
  currentUser: User | null;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: UserState = {
  currentUser: null,
  status: 'idle',
  error: null,
};

// 🔄 Get user by email
export const fetchUserByEmail = createAsyncThunk(
  'user/fetchUserByEmail',
  async (email: string) => {
    const res = await axios.get(`${API_URL}?email=${email}`);
    return res.data[0]; // Assumes email is unique
  }
);

// ➕ Register or add new user
export const createUser = createAsyncThunk(
  'user/createUser',
  async (user: User) => {
    const res = await axios.post(API_URL, user);
    return res.data;
  }
);

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logout: (state) => {
      state.currentUser = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserByEmail.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchUserByEmail.fulfilled, (state, action: PayloadAction<User | undefined>) => {
        state.status = 'succeeded';
        if (action.payload) {
          state.currentUser = action.payload;
        }
      })
      .addCase(fetchUserByEmail.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message ?? 'Failed to fetch user';
      })
      .addCase(createUser.fulfilled, (state, action: PayloadAction<User>) => {
        state.status = 'succeeded';
        state.currentUser = action.payload;
      });
  },
});

export const { logout } = userSlice.actions;
export default userSlice.reducer;
