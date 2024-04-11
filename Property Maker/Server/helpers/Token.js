const jwt = require("jsonwebtoken");
const JWT_SECRET = "dev"
const JWTtokenGenerator = async (id) => {
  const token = jwt.sign(id,JWT_SECRET, {
    expiresIn: "20d",
  });
  return token;
};
module.exports.JWTtokenGenerator = JWTtokenGenerator;