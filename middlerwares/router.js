/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-14 16:25:26
 * @LastEditTime: 2019-09-24 10:50:11
 * @LastEditors: Please set LastEditors
 */
import Router from 'koa-router'
import {findUser, register, login} from '../api/user'
import {createArticle, findAllArticles} from '../api/article';


const router = new Router();




router.get('/', findUser)
router.post('/register', register)
router.post('/login', login)

router.get('/articles', findAllArticles)
router.post('/createArticle', createArticle)

router.post('/admin', (ctx, next) => {
  // console.log(ctx.request.body, 'ctx')
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