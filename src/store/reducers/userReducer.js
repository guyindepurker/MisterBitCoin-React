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
        case 'ADD_MOVE':
            console.log(action.move,'reducer move');
            return{
                ...state,
                currUser:{...state.currUser,moves:[...state.currUser.moves,action.move]}
            }
        case 'REDUCE_BALANCE':
            console.log(action.amount,'reducer amount');

            return {
                ...state,
                currUser:{...state.currUser,coins:(state.currUser.coins-action.amount)}
            } 
        default:
            return state;
    }
}