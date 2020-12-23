import { userService } from '../../services/UserService';
export function signup(name) {
    return  dispatch =>{
        const user =  userService.signup(name)
        dispatch({type:'SIGNUP',user})
    }
}
export function addMove(contact,amount) {
    return dispatch =>{
        const userUpdated = userService.addMove(contact,amount)
        dispatch({type:'UPDATE_USER',user:userUpdated})
    }
}
export function doLogout() {
    return dispatch =>{
        userService.doLogout()
        dispatch({type:'LOGOUT'})
    }

}
export function addCoins(coins) {
    return dispatch =>{
      const userUpdated =  userService.addCoins(coins)
      dispatch({type:'UPDATE_USER',user:userUpdated})
    }
}
