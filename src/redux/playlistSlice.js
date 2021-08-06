import { createSlice } from '@reduxjs/toolkit'
import sample from '../assets/sample'

export const playlistSlice = createSlice({
  name: 'playlist',
  initialState: {
    isAuth: false,
    token: undefined,
    datas: sample,
    tracks: [],
  },
  reducers: {
    login: (state, action) => {
      state.token = action.payload
      state.isAuth = true
    },
    search: (state, action) => {
      state.datas = action.payload
    },
    addTrack: (state, action) => {
      state.tracks.push(action.payload)
    },
    removeTrack: (state, action) => {
      state.tracks = state.tracks.filter((uri) => action.payload !== uri)
    },
  },
})

// Action creators are generated for each case reducer function
export const { login, search, addTrack, removeTrack } = playlistSlice.actions

export default playlistSlice.reducer
