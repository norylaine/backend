const express = require('express');
const router = express.Router();
const controller = require('../controller/floresController');

router.get("/", controller.listarTodasFlores);
router.get("/:id", controller.pesquisaPorId);

module.exports = router;