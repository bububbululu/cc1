// Import Sequelize
import Sequelize from "sequelize";
import InitSchema from "../models/schema_cc1_db";
import UserModel from "../models/Cc1_db/UserModel";

// Logging
import Logger from "./Logger";
// Properties
import properties from "../properties.js";

class Database {
  constructor() {}

  /**
   * Init database
   */
  async init() {
    await this.authenticate();
    Logger.info(
      "Database connected at: " +
        properties.cc1_db.host +
        ":" +
        properties.cc1_db.port +
        "//" +
        properties.cc1_db.user +
        "@" +
        properties.cc1_db.name
    );

    // Import schema
    InitSchema();

    await UserModel.createAdminUser();

  }

  /**
   * Start database connection
   */
  async authenticate() {
    Logger.info("Authenticating to the databases...");

    const sequelize = new Sequelize(
      properties.cc1_db.name,
      properties.cc1_db.user,
      properties.cc1_db.password,
      {
        host: properties.cc1_db.host,
        dialect: properties.cc1_db.dialect,
        port: properties.cc1_db.port,
        logging: false
      }
    );
    this.dbConnection_cc1_db = sequelize;

    try {
      await sequelize.sync();
    } catch (err) {
      // Catch error here
      Logger.error(`Failed connection to the DB`);
      Logger.error(err);
      await new Promise(resolve => setTimeout(resolve, 5000));
      await this.authenticate();
    }
  }

  /**
   * Get connection db
   */
  getConnection() {
    return this.dbConnection_cc1_db;
  }
}

export default new Database();
