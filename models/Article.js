module.exports = (sequelize, Model, DataTypes) => {
  class Article extends Model {}

  Article.init(
    {
      id: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
      },
      title: {
        type: DataTypes.STRING,
        allow_null: false,
      },
      content: {
        type: DataTypes.TEXT,
        allow_null: false,
      },
      image: {
        type: DataTypes.STRING,
      },
      urlSlug: {
        type: DataTypes.STRING,
      },
    },
    {
      sequelize,
      modelName: "article",
    },
  );

  return Article;
};
