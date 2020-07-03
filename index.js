/*
 * @Date: 2019-08-14 11:07:00
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-07-03 18:18:52
 * @Description: 
 */
const Koa = require('koa');
import router from './middlerwares/router'
import bodyParse from 'koa-bodyparser'
import {addBodyParser} from './middlerwares/common'

;(async () => {
  const app = new Koa()
  app.use(bodyParse())
  app.use(require('koa-static')(__dirname + '/public'))
  app.use(router.routes()).use(router.allowedMethods());

  
  app.listen(3002, () => {
    console.log('success listen 3002')
  });

})()
