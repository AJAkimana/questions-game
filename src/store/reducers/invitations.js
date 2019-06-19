import {
  SET_PLAYER,
  INVITE_PLAYER,
  REMOVE_PLAYER,
  ROOM_NAME,
  CREATE_ROOM
} from "../actions/types";

const initialState = {
  roomName: "",
  inputtedUser: "",
  invitedUsers: [],
  gameRooms: []
};

const invitations = (state = initialState, action) => {
  switch (action.type) {
    case ROOM_NAME:
      return {
        ...state,
        roomName: action.payload
      };
    case SET_PLAYER:
      return {
        ...state,
        inputtedUser: action.payload
      };
    case INVITE_PLAYER:
      return {
        ...state,
        inputtedUser: "",
        invitedUsers: [action.payload, ...state.invitedUsers]
      };
    case REMOVE_PLAYER:
      const newInvitedUsers = state.invitedUsers.filter(
        user => user !== action.payload
      );
      return {
        ...state,
        invitedUsers: newInvitedUsers
      };
    case CREATE_ROOM:
      return {
        ...state,
        gameRooms: [...state.gameRooms, action.payload]
      };
    default:
      return state;
  }
};

export default invitations;
