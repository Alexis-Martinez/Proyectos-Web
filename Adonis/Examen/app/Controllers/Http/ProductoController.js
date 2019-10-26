'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Producto = use('App/Models/Producto');

/**
 * Resourceful controller for interacting with productos
 */
class ProductoController {
  /**
   * Show a list of all productos.
   * GET productos
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
  }

  /**
   * Render a form to be used for creating a new producto.
   * GET productos/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {
    let product = await Producto.all();
    return view.response.json('product')
    //return view.render('productos/crear',{products: products.row})
  }

  /**
   * Create/save a new producto.
   * POST productos
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    const product = new Producto();
    product.codigo = request.input('codigo');
    product.nombre = request.input('nombre');
    product.precio = request.input('precio');
    product.cantidad = request.input('cantidad');
    product.marca_id = request.input('marca_id');
    product.proveedor_id = request.input('proveedor_id');
    await product.save();
    return view.response.json('product')
  }

  /**
   * Display a single producto.
   * GET productos/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
    const producto = await Producto.find(params.id);
    return view.response.json('product');
  }

  /**
   * Render a form to update an existing producto.
   * GET productos/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
    let product = await Producto.find(params.id);
    return view.response.json('product')
  }

  /**
   * Update producto details.
   * PUT or PATCH productos/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    const product = await Producto.find(params.id);
    product.codigo = request.input('codigo')
    product.nombre = request.input('nombre')
    product.precio = request.input('precio')
    product.cantidad = request.input('cantidad')
    product.marca_id = request.input('marca_id')
    product.proveedor_id = request.input('proveedor_id')
    await product.save();
    return response.redirect("product")
  }

  /**
   * Delete a producto with id.
   * DELETE productos/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    const producto = await Producto.find(params.id);
    await producto.delete();
    return response.redirect('product');
  }
}

module.exports = ProductoController
