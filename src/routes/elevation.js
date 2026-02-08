import { Router } from 'express';
import elevationController from '../controllers/elevation.js';

const router = Router();
router.get('/elevation', elevationController.getElevation);

export default router;
