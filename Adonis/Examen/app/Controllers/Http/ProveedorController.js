'use strict'

const Proveedor = use('App/Models/Proveedor');

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with proveedors
 */
class ProveedorController {
  /**
   * Show a list of all proveedors.
   * GET proveedors
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
  }

  /**
   * Render a form to be used for creating a new proveedor.
   * GET proveedors/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {
    let prov = await Proveedor.all();
    return view.response.json('prov')
  }

  /**
   * Create/save a new proveedor.
   * POST proveedors
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    const prov = new Proveedor();
    prov.nombre = request.input('nombre');
    await prov.save();
    return view.response.json('prov')
  }

  /**
   * Display a single proveedor.
   * GET proveedors/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
    const prov = await Proveedor.find(params.id);
    return prov.response.json('prov');
  }

  /**
   * Render a form to update an existing proveedor.
   * GET proveedors/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
    let prov = await Proveedor.find(params.id);
    return view.response.json('prov')
  }

  /**
   * Update proveedor details.
   * PUT or PATCH proveedors/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    const prov = await Proveedor.find(params.id);
    prov.nombre = request.input('nombre')
    await prov.save();
    return response.redirect("prov")
  }

  /**
   * Delete a proveedor with id.
   * DELETE proveedors/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    const prov = await Proveedor.find(params.id);
    await prov.delete();
    return response.redirect('prov');
  }
}

module.exports = ProveedorController
