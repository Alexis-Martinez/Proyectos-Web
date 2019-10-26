'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Producto extends Model {

    Marca(){
        return this.belongsToMany('App/Models/Marca','marca_id');
    }

    Proveedor(){
        return this.belongsToMany('App/Models/Proveedor','proveedor_id');
    }
}

module.exports = Producto
