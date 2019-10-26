'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ProductosSchema extends Schema {
  up () {
    this.create('productos', (table) => {
      table.increments()
      table.string('codigo',10)
      table.string('nombre',50)
      table.float('precio',4)
      table.integer('cantidad')
      table.integer('marca_id').unsigned().references('id').inTable('marcas')
      table.integer('proveedor_id').unsigned().references('id').inTable('proveedors')
      table.timestamps()
    })
  }

  down () {
    this.drop('productos')
  }
}

module.exports = ProductosSchema
