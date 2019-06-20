import { GET_RESULTS } from './types';
import http from "../../helpers/httpServices"
 
export  const getResults = (roomId) => async (dispatch) =>{
    const result = await http.get(`/api/v1/game/marks/${roomId}`);
 dispatch({
     type: GET_RESULTS,
     payload: result.data
 });
}