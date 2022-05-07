const jwt = require('jsonwebtoken');

const secret = process.env.REACT_APP_JWT_SECRET;
const expiration = '2h';

module.exports = {
  signToken: function ({ email, name, _id }) {
    const payload = { email, name, _id };
    console.log(`The secret is: ${secret}`);
    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
  },
};
