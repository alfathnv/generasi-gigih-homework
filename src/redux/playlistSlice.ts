import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import sample from "../assets/sample";

interface userProvider {
  country: string
  display_name: string
  email: string
  explicit_content: Object
  external_urls: Object
  followers: Object
  href: string
  id: string
  images: Array<any>
  product: string
  type: string
  uri: string
}

interface PlaylistState {
  isAuth: boolean,
  token: string,
  datas: Array<object>,
  tracks: Array<string>,
  user: userProvider,
}

const initialState: PlaylistState = {
  isAuth: false,
  token: "",
  datas: sample,
  tracks: [],
  user: {
    country: "",
    display_name: "",
    email: "",
    explicit_content: {},
    external_urls: {},
    followers: {},
    href: "",
    id: "",
    images: [],
    product: "",
    type: "",
    uri: "",
  },
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
    addUser: (state, action: PayloadAction<userProvider>) => {
      state.user = action.payload;
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
export const { login, search, addUser, addTrack, removeTrack } = playlistSlice.actions;

export default playlistSlice.reducer;
