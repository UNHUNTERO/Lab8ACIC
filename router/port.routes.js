const express = require('express');
const router = express.Router();
const portController = require('../controller/port.controller');
router.get('/',portController.findAll);
router.post('/',portController.create);
router.get('/:id',portController.findById);
router.put('/:id',portController.update);
router.delete('/:id',portController.delete);
module.exports = router