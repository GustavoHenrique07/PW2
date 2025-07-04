const UserRepository = require('../repositories/User.repository');

module.exports = {
  async getAll() {
    return await UserRepository.findAll();
  },

  async searchByName(name) {
    return await UserRepository.findByName(name);
  },

  async delete(id) {
    return await UserRepository.delete(id);
  },

  async changePassword(id, newPassword) {
    return await UserRepository.changePassword(id, newPassword);
  },

  async create(userData) {
    return await UserRepository.create(userData);
  }
};
