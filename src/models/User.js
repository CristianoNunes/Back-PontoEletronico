const { Model, DataTypes } = require('sequelize');

class User extends Model {
  static init(sequelize) {
    super.init({
      cpf: DataTypes.INTEGER,
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      phone: DataTypes.STRING,
      responsibility: DataTypes.STRING,
      checkIn: DataTypes.STRING,
      checkOut: DataTypes.STRING,
      lunchIn: DataTypes.STRING,
      lunchOut: DataTypes.STRING,
    }, {
      sequelize
    })
  }
}

module.exports = User;