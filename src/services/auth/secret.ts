export default {
  jwt: {
    secret: process.env.TCCAQUARIUM_APP_SECRET,
    expiresIn: '15d',
  },
};
