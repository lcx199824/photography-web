module.exports = app => {
  const localStrategy = app.passport.authenticate('local', {
    successRedirect: '/index',
    failureRedirect: '/login',
  });

  app.post('/api/login', localStrategy);
  app.post('/api/regist', app.controller.user.createUser);
  app.all('/api/logout', app.controller.user.logout);
  app.get('/api/userinfo', app.controller.user.getUserInfo);
  app.post('/api/getUserById', app.controller.user.getUserById);
  app.post('/api/updateUserInfo', app.controller.user.updateUserInfo);

  app.get('/api/getPhotosForIndex', app.controller.photo.getPhotosForIndex);
  app.post('/api/getPhotosNum', app.controller.photo.getPhotosNum);
  app.post('/api/getPhotoList', app.controller.photo.getPhotoList);
  app.post('/api/updatePhotoInfo', app.controller.photo.updatePhotoInfo);
  app.post('/api/uploadPhoto', app.controller.photo.uploadPhoto);
  app.post('/api/getPhotosByCreatorId', app.controller.photo.getPhotosByCreatorId);
  app.post('/api/uploadPhotoList', app.controller.photo.uploadPhotoList);

  app.post('/api/addLike', app.controller.like.addLike);
  app.post('/api/removeLike', app.controller.like.removeLike);
  app.post('/api/getRecordsByPId', app.controller.like.getRecordsByPId);

  app.post('/api/addFollow', app.controller.follow.addFollow);
  app.post('/api/removeFollow', app.controller.follow.removeFollow);
  app.post('/api/findFollowRecord', app.controller.follow.findFollowRecord);
  app.post('/api/getfollowers', app.controller.follow.getfollowers);
  app.post('/api/getfollows', app.controller.follow.getfollows);

  app.get('/api/getDemandsNum', app.controller.demand.getDemandsNum);
  app.post('/api/addDemand', app.controller.demand.addDemand);
  app.post('/api/getDemandList', app.controller.demand.getDemandList);
  app.post('/api/getDemandById', app.controller.demand.getDemandById);
  app.get('/api/getAllDemandsByUser', app.controller.demand.getAllDemandsByUser);
  app.post('/api/updateDemand', app.controller.demand.updateDemand);

  app.post('/api/avatarUpload', app.controller.file.uploadAvatar);
  app.post('/api/uploadFile', app.controller.file.uploadFile);

  // app.post('/api/addCategory', app.controller.category.addCategory);
  app.get('/api/categoryList', app.controller.category.categoryList);

  app.post('/api/addOrder', app.controller.order.addOrder);
  app.get('/api/getOrdersByCreator', app.controller.order.getOrdersByCreator);
  app.get('/api/getDemandsOfDemander', app.controller.order.getDemandsOfDemander);
  app.post('/api/confirmCreator', app.controller.order.confirmCreator);
  app.post('/api/confirmFinish', app.controller.order.confirmFinish);
  app.post('/api/receiveOrder', app.controller.order.receiveOrder);
  app.post('/api/refuseOrder', app.controller.order.refuseOrder);
  app.post('/api/checkOrder', app.controller.order.checkOrder);
  app.post('/api/getSuccesOrders', app.controller.order.getSuccesOrders);

  /* 管理员后台接口 */
  app.post('/admin/login', app.controller.admin.login);
  app.get('/admin/groupByCategory', app.jwt, app.controller.photo.groupByCategory);
  app.get('/admin/getInforCardData', app.jwt, app.controller.admin.getInforCardData);
  app.get('/admin/getDemandBySeason', app.jwt, app.controller.admin.getDemandBySeason);
  app.get('/admin/getCategory', app.jwt, app.controller.admin.getCategory);
  app.post('/admin/updateCategoryName', app.jwt, app.controller.admin.updateCategoryName);
  app.post('/admin/addNewCategory', app.jwt, app.controller.admin.addCategory);
  app.get('/admin/getAdmin', app.jwt, app.controller.admin.getAdmin);
  app.get('/admin/getTableUser', app.jwt, app.controller.user.list);
  app.get('/admin/getTableDemand', app.jwt, app.controller.demand.list);
  app.get('/admin/getTablePhoto', app.jwt, app.controller.photo.list);
  app.post('/admin/removeUserById', app.jwt, app.controller.admin.removeUserById);
  app.post('/admin/removeDemandById', app.jwt, app.controller.admin.removeDemandById);
  app.post('/admin/removePhotoById', app.jwt, app.controller.admin.removePhotoById);

  app.all('/admin/logout', app.jwt, app.controller.admin.logout);

  app.get('/*', app.controller.app.index);
};