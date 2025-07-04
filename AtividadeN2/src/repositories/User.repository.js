const { User } = require('../database/models');
const { Op } = require('sequelize');

module.exports = {
  async findAll() {
    return await User.findAll();
  },

  async findByName(name) {
    return await User.findAll({
      where: {
        name: { [Op.like]: `%${name}%` }
      }
    });
  },

  async delete(id) {
    const user = await User.findByPk(id);
    if (!user) return false;
    await user.destroy();
    return true;
  },

  async changePassword(id, newPassword) {
    const user = await User.findByPk(id);
    if (!user) return false;
    user.password = newPassword;
    await user.save();
    return true;
  },

  async create(userData) {
    return await User.create(userData);
  }
};
