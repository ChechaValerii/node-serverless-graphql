const getOrders = require('./resolvers/getOrders');

module.exports.resolvers = {
  Query: {
    getOrders,
  },
};
