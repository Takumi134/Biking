const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Map extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User, Comment }) {
      this.belongsTo(User, { foreignKey: 'user_id' });
      this.hasMany(Comment, { foreignKey: 'map_id' });
    }
  }
  Map.init({
    img: DataTypes.TEXT,
    length_way: DataTypes.STRING,
    location: DataTypes.STRING,
    name_way: DataTypes.STRING,
    user_id: DataTypes.INTEGER,
    coord: DataTypes.TEXT,
  }, {
    sequelize,
    modelName: 'Map',
  });
  return Map;
};
