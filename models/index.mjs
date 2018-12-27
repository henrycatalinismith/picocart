import fs from 'fs';
import path from 'path';
import Sequelize from 'sequelize';

const basename = "index.mjs";
const db = {};
const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: "postgres"
})

const models = path.resolve("./models")

fs
  .readdirSync(models)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(file => {
    const model = sequelize['import'](path.join(models, file));
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;
