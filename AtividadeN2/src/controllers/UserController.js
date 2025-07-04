const UserService = require('../services/User.service');

module.exports = {
  async list(req, res) {
    const users = await UserService.getAll();
    return res.json(users);
  },

  async search(req, res) {
    const { name } = req.query;
    const users = await UserService.searchByName(name);
    return res.json(users);
  },

  async delete(req, res) {
    const { id } = req.params;
    const result = await UserService.delete(id);
    if (!result) return res.status(404).json({ error: 'User not found' });
    return res.status(204).send();
  },

  async changePassword(req, res) {
    const { id } = req.params;
    const { newPassword } = req.body;

    if (!newPassword) {
      return res.status(400).json({ error: 'New password is required' });
    }

    const result = await UserService.changePassword(id, newPassword);
    if (!result) return res.status(404).json({ error: 'User not found' });

    return res.status(200).json({ message: 'Password updated successfully' });
  },

  async create(req, res) {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({ error: 'All fields are required (name, email, password)' });
    }

    try {
      const user = await UserService.create({ name, email, password });
      return res.status(201).json(user);
    } catch (error) {
      return res.status(500).json({ error: 'Error creating user', details: error.message });
    }
  }
};
