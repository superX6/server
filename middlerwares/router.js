/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-14 16:25:26
 * @LastEditTime: 2019-08-14 16:30:48
 * @LastEditors: Please set LastEditors
 */
import Router from 'koa-router'

const router = new Router();

router.get('/', (ctx, next) => {
  ctx.body = 'koa-views'
})



export default router