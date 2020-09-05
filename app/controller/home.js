'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = {
      code: 1,
      msg: 'success',
      data: {
        list: [
          { id: 1, name: 'demo1' }
        ]
      }
    };
  }
}

module.exports = HomeController;
