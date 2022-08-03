module.exports = (sequelize, Model, DataTypes) => {
  class User extends Model {}

  User.init(
    {
      id: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
      },
      firstname: {
        type: DataTypes.STRING,
        allow_null: false,
      },
      lastname: {
        type: DataTypes.STRING,
        allow_null: false,
      },
      email: {
        type: DataTypes.STRING,
        allow_null: false,
      },
      password: {
        type: DataTypes.STRING,
      },
    },
    {
      sequelize,
      modelName: "user",
    },
  );

  return User;
};
