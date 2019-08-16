/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-14 16:25:26
 * @LastEditTime: 2019-08-16 16:02:01
 * @LastEditors: Please set LastEditors
 */
import Router from 'koa-router'
import {findUser, register} from '../api/user'
import {　wantFindData, wantAddData, wantDeleData, wantExitData} from '../lib/processData'


const router = new Router();




router.get('/', findUser)
router.post('/register', register)

router.post('/admin', (ctx, next) => {
  console.log(ctx.request.body, 'ctx')
  ctx.body = {
    data: {
      list: [
        {
          name: "leo", age: 34
        },
        {
          name: "superx", age: 28
        },
      ]
    },
    success: "true"
  }
})

router.get('/admin2', (ctx, next) => {
  console.log(11,ctx.query.username, 333)
  console.log(`insert into user2 values (username: "${ctx.query.username}", password: "${ctx.query.password}")`)

  ctx.body = {
    data: {
      list: [
        {
          name: "leo", age: 34
        },
        {
          name: "superx", age: 28
        },
      ]
    },
    success: "true"
  }
})


export default router