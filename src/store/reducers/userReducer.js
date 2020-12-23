const INITIAL_STATE ={
    currUser:null
}
export function userReducer(state=INITIAL_STATE,action) {
    switch (action.type) {
        case 'SIGNUP':
       console.log('user in reducer',action.user);
          return {
              ...state,
              currUser:action.user,
          }  
        case 'UPDATE_USER':
            return {
                ...state,
                currUser:action.user
            }  
        case 'LOGOUT':
            return{
                ...state,
                currUser:null
            }

        default:
            return state;
    }
}