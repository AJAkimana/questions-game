import { SET_CURRENT_USER, REMOVE_CURRENT_USER } from './types';
import jwtDecode from 'jwt-decode';


export  const loginUser = (token) => (dispatch) =>{
localStorage.setItem('token', token);
const user = jwtDecode(token);
 dispatch({
     type:SET_CURRENT_USER,
     payload: user
 });
} 

export const logoutUser = () => dispatch => {
    localStorage.removeItem('token');
    dispatch({
        type:REMOVE_CURRENT_USER
    });

}