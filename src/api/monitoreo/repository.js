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


const GetMonitoreo = async () => {
  const query = await knex
  .select('Temperatura','humeda','fecha')
  .from('monitoreo')
  .orderBy('fecha','desc')
return query;
};

module.exports = {
  insertMonitoreo,
  GetMonitoreo
};
