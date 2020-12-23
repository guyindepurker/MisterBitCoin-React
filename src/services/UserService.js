import { storageService } from './StorageService';
import { utilService } from './UtilService';
export const userService = {
  signup,
  addMove,
  getUsers,
  doLogout,
  addCoins
};
const USERSDB = 'users_db';
const LoggedinUser ='LoggedinUser'
var gUsers = null;

function getUsers() {
  return gUsers;
}
function signup(name) {
  let user = _handleLogin(name)
  if(!user) {
    user = {
      _id: utilService.makeId(),
      name,
      coins: 100,
      moves: [],
    };
    gUsers.push(user);
    _saveUsersToStorage()
  }
  storageService.save(LoggedinUser, user);
  return user;
}
function addMove(contact, amount) {
  const user = storageService.load(LoggedinUser);
  const move = {
    _id: utilService.makeId(),
    toId: contact._id,
    to: contact.name,
    at: Date.now(),
    amount,
  };
  user.coins -= amount;
  user.moves.unshift(move);
  storageService.save(LoggedinUser, user);
  _saveUsersToStorage(user)
  return user;
}
function addCoins(coins) {
  const user = storageService.load(LoggedinUser)
  user.coins += coins
  storageService.save(LoggedinUser, user);
  _saveUsersToStorage(user)
  return user
}
function doLogout() {
  storageService.remove(LoggedinUser)
}

function _handleLogin(name) {
  const user = gUsers.find(gUser => gUser.name === name)
  const res  = user ? user : null
  return res
}
function _saveUsersToStorage(user=null) {
  if(user){
    const idx = gUsers.findIndex(gUser=>gUser._id===user._id)
    gUsers.splice(idx,1,user)
  }
  storageService.save(USERSDB, gUsers);
  
}

(function _loadUsers() {
  let users = storageService.load(USERSDB);
  if (!users) {
    users = [];
    storageService.save(USERSDB, users);
  }
  gUsers = users;
  return gUsers;
})();
