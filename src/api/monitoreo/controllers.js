const repo = require('./repository');

const postMonitoreo = async (req, res) => {
  try {
    const { tem , hum} =req.body;
    const data = await repo.insertMonitoreo({tem,hum});
    if (data===1) {
      res.status(200).send({ Message: 'Registro exitoso' });
    } else {
      res.send({ Message: 'No se pudo realizar el registro' });
    }
  } catch (error) {
    res.status(500).send(JSON.stringify(error));
  }
};

const getMonitoreo = async (req, res) => {
  try {
    const data = await repo.GetMonitoreo();
    var tem,hum;
    if (data!="") {
      if(data[0].Temperatura  < 17) {
        tem=data[0].Temperatura + " Mínima";
      }  if(data[0].Temperatura  > 17 && data[0].Temperatura  <=24) {
        tem=data[0].Temperatura + " Optimo";
      }if(data[0].Temperatura  >26){
        tem=data[0].Temperatura + " Máxima";
      }

      if(data[0].humeda  < 50) {
        hum=data[0].humeda + " Baja";
      }  if(data[0].humeda  >= 50 && data[0].humeda  <=70) {
        hum=data[0].humeda + " Optimo";
      }if(data[0].humeda  >70){
        data[0].humeda + " Alta";
      }

      var dd ={
        id: data[0].id ,
        Temperatura: tem,
        humeda: hum,
        fecha: data[0].fecha,
        hora: data[0].hora
      }
      res.status(200).send(dd);
    } else {
      res.send({ Message: 'No hay datos Registrados' });
    }
  } catch (error) {
    res.status(500).send(JSON.stringify(error));
  }
};


module.exports = { postMonitoreo ,getMonitoreo};
