const express = require('express');
const router = express.Router();
const shipController = require('../controller/ship.controller');
router.get('/',shipController.findAll);
router.post('/',shipController.create);
router.get('/:id',shipController.findById);
router.put('/:id',shipController.update);
router.delete('/:id',shipController.delete);
module.exports = router