import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import sample from "../assets/sample";

interface PlaylistState {
  isAuth: boolean,
  token: string,
  datas: Array<object>,
  tracks: Array<string>,
}

const initialState: PlaylistState = {
  isAuth: false,
  token: "",
  datas: sample,
  tracks: [],
}

export const playlistSlice = createSlice({
  name: "playlist",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
      state.isAuth = true;
    },
    search: (state, action: PayloadAction<Array<object>>) => {
      state.datas = action.payload;
    },
    addTrack: (state, action: PayloadAction<string>) => {
      state.tracks.push(action.payload);
    },
    removeTrack: (state, action: PayloadAction<string>) => {
      state.tracks = state.tracks.filter((uri) => action.payload !== uri);
    },
  },
});

// Action creators are generated for each case reducer function
export const { login, search, addTrack, removeTrack } = playlistSlice.actions;

export default playlistSlice.reducer;
