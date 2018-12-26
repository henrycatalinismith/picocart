module.exports = (Sequelize, DataTypes) => {
  const User = Sequelize.define("User", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  }, {
    tableName: "users",
  });

  return User;
};
