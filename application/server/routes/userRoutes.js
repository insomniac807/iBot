const express = require('express');
const router = express.Router();
const { getUser, setUser, updateUser, deleteUser  } = require('../database/db_services/userServices');

router.route('/').get(getUser).post(setUser);
router.route('/:id').put(updateUser).delete(deleteUser);

module.exports = router;