import { configureStore } from "@reduxjs/toolkit";

// Nao utilizado pois será utilizado na verificação de login.
// import userReducer from "../reducers/userSlice";
import settingsReducer from "../reducers/configSlice";

export const store = configureStore({
  reducer: {
    settings: settingsReducer
  }
});

export default store;