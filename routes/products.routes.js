const express = require('express');
const router = express.Router();

const DepartmentController = require('../controllers/products.controller');

router.get('/products', DepartmentController.getAll);
router.get('/products/random', DepartmentController.getRandom);
router.get('/products/:id', DepartmentController.getId);
router.post('/products', DepartmentController.addNew);
router.put('/products/:id', DepartmentController.modify);
router.delete('/products/:id', DepartmentController.remove);

module.exports = router;
