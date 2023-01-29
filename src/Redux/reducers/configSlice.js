//userSlice

import { createSlice } from "@reduxjs/toolkit";

export const settings = createSlice({
  name: "settings",
  initialState: {
    version: '1.0.0 Beta',
    theme: '',
    nameApp: '',
    warnings: `oiiiiiiiiiiiiioiiiiiiiiiiiii`,
    promotions: [
      {name: 'basic', value: 20, describe: `hellowwwwww`},
      {name: 'mediun', value: 20, describe: `hellowwwwww`},
      {name: 'prof', value: 20, describe: `hellowwwwww`}
    ]
  },
  reducers: {
    setVersion(state, { payload }) {
      return { ...state, version: payload }
    },
    setTheme(state, { payload }) {
      return { ...state, theme: payload }
    },
    setNameApp(state, { payload }) {
      return { ...state, nameApp: payload }
    },
    setWarnings(state, { payload }) {
      return { ...state, warnings: payload }
    },
    setPromotions(state, { payload }) {
      return { ...state, warnings: payload }
    },
    // Codigo comentado para exemplo de retorno ao stado inicial.
    // logOut(state) {
    //   return { ...state, isLogged: false, user: '' }
    // }
  }
});

export const { setVersion, setTheme, setNameApp, setWarnings } = settings.actions;

export const selectSettings = state => state.settings;

export default settings.reducer;