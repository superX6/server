/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-14 11:07:00
 * @LastEditTime: 2019-09-16 10:20:05
 * @LastEditors: Please set LastEditors
 */
const Koa = require('koa')
import router from './middlerwares/router'
import bodyParse from 'koa-bodyparser'
import {addBodyParser} from './middlerwares/common'

;(async () => {
  const app = new Koa()
  app.use(bodyParse())

  app.use(router.routes()).use(router.allowedMethods());

  
  app.listen(3000, () => {
    console.log('success listen 3000')
  });

})()


