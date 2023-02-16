const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Point extends Model {
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
  Point.init({
    score: DataTypes.INTEGER,
    map_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Point',
  });
  return Point;
};
