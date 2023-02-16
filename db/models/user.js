const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Map, Comment }) {
      this.hasMany(Map, { foreignKey: 'user_id' });
      this.hasMany(Comment, { foreignKey: 'user_id' });
    }
  }
  User.init({
    username: DataTypes.STRING,
    hashpass: DataTypes.TEXT,
    email: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};
