const { Model, DataTypes } = require('sequelize');

class User extends Model {
  static init(sequelize) {
    super.init({
      cpf: DataTypes.INTEGER,
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      phone: DataTypes.STRING,
      responsibility: DataTypes.STRING,
      checkInHour: DataTypes.STRING,
      checkOutHour: DataTypes.STRING,
      lunchInHours: DataTypes.STRING,
      lunchOutHour: DataTypes.STRING,
    }, {
      sequelize
    })
  }
}

module.exports = User;