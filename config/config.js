require("dotenv").config();

module.exports = {
    DB_NAME: process.env.DB_NAME,
    DB_PASSWORD: process.env.DB_PASSWORD,
    DB_CLUSTER: process.env.DB_CLUSTER,
    JWT_SECRET: process.env.JWT_SECRET
  };