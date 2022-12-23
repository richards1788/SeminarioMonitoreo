const repo = require('./repository');

const postMonitoreo = async (req, res) => {
  try {
    const { tem , hum} =req.params;
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



module.exports = { postMonitoreo };
