// const sessionIdToUserMap = new Map();
const jwt = require("jsonwebtoken");
const secret = "Naresh@90122";

function setUser(user){
  return jwt.sign(
    {
      _id: user._id, email:user.email
    },
     secret
    );
}

// function setUser(id, user) {
//   sessionIdToUserMap.set(id, user);
// }

// function getUser(id) {
//   return sessionIdToUserMap.get(id);
// }

function getUser(token) {
  if(!token) return null;
  try{
    return jwt.verify(token, secret);
  }catch(error){
    return null;
  }
}

module.exports = {
  setUser,
  getUser,
};