/**
 * Created by liuqi453 on 10/12/16.
 */
export default [
  // 登录页面
  {
    path: '/',
    name: 'index',
    component: function (resolve) {
      require(['../views/Index/Index.vue'], resolve)
    }
  }
  /* eslint-disable */
  /* inject start */
  ,
  {
    path: '/defaultView',
    name: 'defaultView',
    component: function(resolve) {
      require(['../views/DefaultView/DefaultView.vue'], resolve)
    }
  }
  /* inject end */

]