

import { Router } from 'express';
import ReservaController from '../controller/reservasController.js';

const router = Router();

router.get('/', ReservaController.getAll);
router.get('/:id', ReservaController.getById);
router.post('/', ReservaController.create);
router.put('/:id', ReservaController.update);
router.delete('/:id', ReservaController.delete);

export default router;
