/*
 * @Date: 2019-08-14 11:07:00
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-06-09 09:18:46
 * @Description: 
 */
const Koa = require('koa');
import router from './middlerwares/router'
import bodyParse from 'koa-bodyparser'
import {addBodyParser} from './middlerwares/common'

;(async () => {
  const app = new Koa()
  app.use(bodyParse())

  app.use(router.routes()).use(router.allowedMethods());

  
  app.listen(3002, () => {
    console.log('success listen 3002')
  });

})()
