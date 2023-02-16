const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User, Map }) {
      this.belongsTo(User, { foreignKey: 'user_id' });
      this.belongsTo(Map, { foreignKey: 'map_id' });
    }
  }
  Comment.init({
    content: DataTypes.TEXT,
    score: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER,
    map_id: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Comment',
  });
  return Comment;
};
