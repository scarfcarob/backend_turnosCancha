

import db from '../config/db.js';                      //ES6= IMPORT/EXPORT;

const Usuario = {
    async getAll() {                                          //donde hay query, cambiar bd por pool?
    const [rows] = await db.query('SELECT * FROM usuarios');
    return rows;
    },

    async getById(id) {
    const [rows] = await db.query('SELECT * FROM usuarios WHERE id = ?', [id]);
    return rows[0];
    },

    async create({ nombre, email, telefono, tipo, contraseña }) {
    const sql = `
        INSERT INTO usuarios (nombre, email, telefono, tipo, contraseña)
        VALUES (?, ?, ?, ?, ?)
    `;
    const [result] = await db.query(sql, [nombre, email, telefono, tipo, contraseña]);
    return result.insertId;
    },

    async update(id, { nombre, email, telefono, tipo }) {
    const sql = `
        UPDATE usuarios
        SET nombre = ?, email = ?, telefono = ?, tipo = ?
        WHERE id = ?
    `;
    const [result] = await db.query(sql, [nombre, email, telefono, tipo, id]);
    return result.affectedRows > 0;
    },

    async delete(id) {
    const [result] = await db.query('DELETE FROM usuarios WHERE id = ?', [id]);
    return result.affectedRows > 0;
    },
};


//exports.module = Usuario; 

//module.exports; //como se exporta aca!!!!!


export default Usuario;





//import Pool from "../config/bd.js"; 

//import {pool} from "../config/database/bd.js"; 

//const Usuarios = {
    //async create({ nombre, email, telefono, tipo, contraseña }) {
    //const sql = `
        //INSERT INTO usuarios (nombre, email, telefono, tipo, contraseña)
        //VALUES (?, ?, ?, ?, ?)
    //`;
    //const [result] = await db.query(sql, [nombre, email, telefono, tipo, contraseña]);
    //return result.insertId;
    //},

    //async findAll() {
    //const sql = `SELECT * FROM usuarios`;
    //const [rows] = await db.query(sql);
    //return rows;
    //},

    //async findById(id) {
    //const sql = `SELECT * FROM usuarios WHERE id = ?`;
    //const [rows] = await db.query(sql, [id]);
    //return rows[0];
    //},

    //async update(id, { nombre, email, telefono, tipo }) {
    //const sql = `
        //UPDATE usuarios
        //SET nombre = ?, email = ?, telefono = ?, tipo = ?
        //WHERE id = ?
    //`;
    //const [result] = await db.query(sql, [nombre, email, telefono, tipo, id]);
    //return result.affectedRows > 0;
    //},

    //async delete(id) {
    //const sql = `DELETE FROM usuarios WHERE id = ?`;
    //const [result] = await db.query(sql, [id]);
    //return result.affectedRows > 0;
    //},
//};

//export default {          //export default Usuario = function{
    //create,
    //findAll,
    //findById,
    //update,
    //deleteOne,
//};


//export default {
    //7getAll,
    //getById,
    //create,
    //update,
    //deleteOne,
  //};