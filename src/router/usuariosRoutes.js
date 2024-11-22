//const express = require("express"); 
//const router = express.Router(); 

//const usuariosController = require('../controller/usuariosController'); 



// en el router interpreto el trafico y le digo que vayan a su 
//correspondiente funcion


//router conoce al controlador. y cada vez que apreto ex: getAll me lleva a controladores


//endpoint para listar aviones, 
//router.get('/',avionController.getAll);

//endpoint para crear aviones 
//router.post('/ create', avionController.create); 

//enpoint para modificar aviones 
//router.put('/update'.......)


import { Router } from 'express';
import UsuarioController from '../controller/usuariosController.js';

const router = Router();

router.get('/', UsuarioController.getAll);
router.get('/:id', UsuarioController.getById);
router.post('/', UsuarioController.create);
router.put('/:id', UsuarioController.update);
router.delete('/:id', UsuarioController.delete);

export default router;
