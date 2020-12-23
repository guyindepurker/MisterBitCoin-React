import { userService } from '../../services/UserService';
export function signup(name) {
    return  dispatch =>{
        const user =  userService.signup(name)
        console.log('user action:', user)
        dispatch({type:'SIGNUP',user})
    }
}
export function addMove(contact,amount) {
    console.log('amount actions:', amount)
    console.log('contact actions:', contact)
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
