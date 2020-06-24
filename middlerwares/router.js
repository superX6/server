import Router from 'koa-router'
import {findUser, register, login} from '../api/user'
import {createArticle, findAllArticles, getrticle, deleteArticle} from '../api/article';


const router = new Router();




router.get('/', findUser)
router.post('/register', register)
router.post('/login', login)

router.get('/articles', findAllArticles)
router.post('/createArticle', createArticle)
router.get('/getArticles', getrticle)
router.get('/DeleteArticles', deleteArticle)

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