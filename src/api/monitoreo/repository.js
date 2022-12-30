const knex = require('../../database');

const insertMonitoreo = async ({tem,hum}) => {
  let fecha = new Date();
  return knex
    .transaction(function (t) {
      return knex('monitoreo').transacting(t).insert({
        Temperatura: tem,
        humeda: hum,
        fecha: fecha
      });
    })
    .then(function (e) {
      return 1;
    })
};

module.exports = {
  insertMonitoreo
};
