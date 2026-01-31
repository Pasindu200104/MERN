import express from 'express';
import { createData, deleteData, getAllData, updateData } from '../controllers/testControllers.js';

const router = express.Router();

router.get('/', getAllData);
router.post('/', createData);
router.put('/:id', updateData);
router.delete('/:id', deleteData);

export default router;

// mongodb password : Y8ZOeMGNuNpnugVD
// mongodb+srv://dilshanpasindu593_db_user:Y8ZOeMGNuNpnugVD@cluster0.zpazk7s.mongodb.net/?appName=Cluster0