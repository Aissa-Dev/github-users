import axios from "axios";
import { usersUrl } from "../api";

//Action Creator

export const loadUsers = () => async (dispatch) => {
  const usersData = await axios.get(usersUrl());
  dispatch({
    type: "FETCH_USERS",
    payload: {
      users: usersData.data
    }
  });
};
