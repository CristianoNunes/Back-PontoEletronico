const User = require('../models/User');

module.exports = {
  async store(req, res) {
    const { cpf, name, email, phone, responsibility, checkIn, checkOut, lunchIn, lunchOut } = req.body;

    const user = await User.create({ 
      cpf,
      name,
      email,
      phone,
      responsibility,
      checkIn,
      checkOut,
      lunchIn,
      lunchOut
    });

    return res.json(user);
  }
};