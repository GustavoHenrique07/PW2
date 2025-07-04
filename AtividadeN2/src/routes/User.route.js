const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UserController');

router.get('/', UserController.list);
router.get('/search', UserController.search);
router.post('/', UserController.create); // ✅ Endpoint de cadastro
router.delete('/:id', UserController.delete);
router.put('/:id/password', UserController.changePassword);

module.exports = router;
