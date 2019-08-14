/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-14 11:07:00
 * @LastEditTime: 2019-08-14 16:31:33
 * @LastEditors: Please set LastEditors
 */
const Koa = require('koa')
import {connect} from './db/index'
import router from './middlerwares/router'

connect().then(() => {
  const app = new Koa()


  app.use(router.routes());
  
  app.listen(3000);
})


