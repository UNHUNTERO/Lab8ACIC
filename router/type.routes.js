const express = require('express');
const router = express.Router();
const typeController = require('../controller/type.controller');
router.get('/',typeController.findAll);
router.post('/',typeController.create);
router.get('/:id',typeController.findById);
router.put('/:id',typeController.update);
router.delete('/:id',typeController.delete);
module.exports = router