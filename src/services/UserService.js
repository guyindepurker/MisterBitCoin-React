import { storageService } from './StorageService';
import { utilService } from './UtilService';
export const userService = {
  signup,
  addMove,
  getUsers,
};
const USERSDB = 'users_db';
const LoggedinUser ='LoggedinUser'
var gUsers = null;

function getUsers() {
  return gUsers;
}
function signup(name) {
  const user = {
    _id: utilService.makeId(),
    name,
    coins: 100,
    moves: [],
  };
  gUsers.push(user);
  storageService.save(USERSDB, gUsers);
  console.log('user service sign up:', user);
  storageService.save(LoggedinUser, user);
  return user;
}
function addMove(contact, amount) {
  const user = storageService.load(LoggedinUser);
  console.log('user before move:', user)
  const move = {
    _id: utilService.makeId(),
    toId: contact._id,
    to: contact.name,
    at: Date.now(),
    amount,
  };
  console.log('move service:', move)

  user.coins -= amount;
  user.moves.unshift(move);
  console.log('user after move:', user)
  storageService.save(LoggedinUser, user);
  storageService.save(USERSDB, gUsers);
  return user;
}

function getById(userId) {
  const user = gUsers.find((currUser) => currUser._id === userId);
  return user;
}

(function _loadUsers() {
  let users = storageService.load(USERSDB);
  if (!users || !users.length) {
    users = [];
    users.push({
      name: 'Ochoa Hyde',
      coins: 100,
      moves: [],
    });
    storageService.save(USERSDB, users);
  }
  gUsers = users;
  return gUsers;
})();
