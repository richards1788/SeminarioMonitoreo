require('dotenv').config();

const connectionData = {
  client: 'mssql',
  connection: {
    server: 'serverm.database.windows.net',
    user: 'root123',
    password: 'Admin123',
    options: {
      port: 1433,
      database: 'bdmonitoreo',
      encrypt: true
    }
  }
};

module.exports = connectionData;
