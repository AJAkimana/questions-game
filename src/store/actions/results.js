import { GET_RESULTS } from './types';
import http from "../../helpers/httpServices"
 
export  const getResults = () => async (dispatch) =>{
    const result = await http.get(`/api/v1/game/marks`);
 dispatch({
     type: GET_RESULTS,
     payload: result.data
 });
}