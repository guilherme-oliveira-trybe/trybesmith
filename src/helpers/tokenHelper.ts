import Jwt from 'jsonwebtoken';
// const { CustomError } = require('../errors');

const JWT_SECRET = 'teve que ser hardCoded';
const JWT_CONFIG: object = { algorithm: 'HS256', expiresIn: '1d' };

const tokenHelper = {
  createToken: (payload: object) => {
    const token = Jwt.sign(payload, JWT_SECRET, JWT_CONFIG);
    return token;
  },
  // verifyToken: (token: string) => {
  //   try {
  //     const dados = Jwt.verify(token, JWT_SECRET);
  //     return dados;
  //   } catch (error) {
  //     if (error) throw new CustomError(401, 'Expired or invalid token');
  //   }
  // },
};

export default tokenHelper;