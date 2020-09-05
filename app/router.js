'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  // 使用 Service
  app.router.get('/user/:id', app.controller.user.info);
};
