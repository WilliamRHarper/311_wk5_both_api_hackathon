const mysql = require("mysql");
require('dotenv').config();

class Connection {
    constructor() {
      if (!this.pool) {
        console.log("creating connection...");
        this.pool = mysql.createPool({
          connectionLimit: 100,
          host: "35.184.122.107",
          user: "root",
          password: process.env.DB_PASSWORD,
          database: "hackathon-db",
        });
  
        return this.pool;
      }
  
      return this.pool;
    }
  }
  
  const instance = new Connection();
  
  module.exports = instance;