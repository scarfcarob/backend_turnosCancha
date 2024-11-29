

import { Router } from 'express';
import c from '../controller/canchasController.js';

const router = Router();
router.get('/', c.getAll);

router.get('/:id', c.getById);
router.post('/', c.create);
router.put('/:id', c.update);
router.delete('/:id', c.delete);

export default router;
