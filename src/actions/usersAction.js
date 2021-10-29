import axios from "axios";
import { usersUrl } from "../api";

//Action Creator

export const loadUsers = (url) => async (dispatch) => {
  const usersData = await axios.get(url, {
    headers: {
      authorization: "token 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"
    }
  });
  dispatch({
    type: "FETCH_USERS",
    payload: {
      users: usersData.data
    }
  });
};

export const loadUsersByName = (url) => async (dispatch) => {
  const searchedData = await axios.get(url, {
    headers: {
      authorization: "token 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"
    }
  });
  dispatch({
    type: "FETCH_NAMES",
    payload: {
      searched: searchedData.data
    }
  });
};
