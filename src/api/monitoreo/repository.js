const knex = require('../../database');

const insertMonitoreo = async ({tem,hum}) => {
  const americaMazatlanDate = new Date().toLocaleString("en-US",{hour12: false});
    var fecha=americaMazatlanDate.substring(0,9)
    var hora=americaMazatlanDate.substring(10,19)
  return knex
    .transaction(function (t) {
      return knex('monitoreo').transacting(t).insert({
        Temperatura: tem,
        humeda: hum,
        fecha: fecha.trim(),
        hora: hora.trim(),
      });
    })
    .then(function (e) {
      return 1;
    })
};


const GetMonitoreo = async () => {
  const query = await knex.raw('SELECT TOP 1 Temperatura,humeda,fecha,hora FROM [dbo].[monitoreo]ORDER BY id DESC')
return query;
};

module.exports = {
  insertMonitoreo,
  GetMonitoreo
};
