const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../../.env') });
const jwt = require('jsonwebtoken');

const secret = process.env.MY_SECRET
const expiration = '2h';

module.exports = {
  authMiddleware: function ({req, res, next}) {
    // console.log(req.headers);
    // console.log(req.rawHeaders);
    let token = req.query?.token || req.headers?.authorization;

    if (req.headers?.authorization) {
      token = token.split(' ').pop().trim();
    }

    if (!token) {
      // return res.status(400).json({ message: 'You have no token!' });
      return req;
    }

    try {
      const { data } = jwt.verify(token, secret, { maxAge: expiration });
      req.user = data;
    } catch {
      console.log('Invalid token');
      // return res.status(400).json({ message: 'invalid token!' });
    }

    // next();
    return req;
  },
  signToken: function ({ username, email, _id }) {
    const payload = { username, email, _id };

    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
  },
};
