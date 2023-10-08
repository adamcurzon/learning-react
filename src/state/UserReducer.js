import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    auth: false,
    name: "",
    email: "",
    token: "",
    loading: false,
  },
  reducers: {
    setLoading(state, action) {
      state.loading = action.payload;
    },
    setUser(state, action) {
      state.name = action.payload.name;
    },
    clearUser(state, action) {
      state.name = "";
      state.auth = false;
      state.token = "";
      localStorage.removeItem("token");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.loading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.auth = true;
        state.token = "EXAMPLE_TOKEN";
        localStorage.setItem("token", state.token);
        state.loading = false;
      })
      .addCase(login.rejected, (state, action) => {
        state.auth = false;
        state.loading = false;
      })
      .addCase(fromToken.fulfilled, (state, action) => {
        state.auth = true;
        state.token = "EXAMPLE_TOKEN";
        localStorage.setItem("token", state.token);
        state.loading = false;
      })
      .addCase(fromToken.rejected, (state, action) => {
        state.auth = false;
        state.loading = false;
      });
  },
});

// User Actions
export const login = createAsyncThunk("user/login", async () => {
  try {
    // Replace with Axios
    const response = {
      data: {
        name: "Adam Curzon",
      },
    };
    return response.data;
  } catch (error) {
    throw error;
  }
});

export const fromToken = createAsyncThunk("user/fromtoken", async () => {
  try {
    // Replace with getting token etc
    if (localStorage.getItem("token") === null) {
      throw new Error("No token");
    }

    // Replace with Axios
    const response = {
      data: {
        name: "Adam Curzon",
      },
    };
    return response.data;
  } catch (error) {
    throw error;
  }
});

export const { setLoading, setUser, clearUser } = userSlice.actions;

export default userSlice.reducer;
