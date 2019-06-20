import {
  SET_PLAYER,
  INVITE_PLAYER,
  REMOVE_PLAYER,
  ROOM_NAME,
  CREATE_ROOM
} from "./types";
import http from "../../helpers/httpServices";

export const setPlayer = player => {
  return {
    type: SET_PLAYER,
    payload: player
  };
};

export const roomName = room => {
  return {
    type: ROOM_NAME,
    payload: room
  };
};

export const invitePlayer = player => {
  return {
    type: INVITE_PLAYER,
    payload: player
  };
};

export const removePlayer = player => {
  return {
    type: REMOVE_PLAYER,
    payload: player
  };
};

export const createRoom = (roomName, invitedUsers) => async dispatch => {
  const response = await http.post("/api/v1/game", {
    name: roomName,
    emails: invitedUsers
  });
  dispatch({
    type: CREATE_ROOM,
    payload: response.data
  });
};
