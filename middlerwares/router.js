import Router from 'koa-router'
import multer from 'koa-multer'
import {findUser, register, login} from '../api/user'
import {createArticle, findAllArticles, getrticle, deleteArticle} from '../api/article';


const router = new Router();

//配置
var storage = multer.diskStorage({
  //文件保存路径
  destination: function (req, file, cb) {
      cb(null, 'public/uploads/')
  },
  //修改文件名称
  filename: function (req, file, cb) {
      var fileFormat = (file.originalname).split(".");  //以点分割成数组，数组的最后一项就是后缀名
      cb(null,Date.now() + "." + fileFormat[fileFormat.length - 1]);
  }
})
//加载配置
var upload = multer({ storage: storage });
router.post('/md/upload',upload.single('file'),async(ctx,next)=>{
    ctx.body = {
        filename: 'http://localhost:3002/uploads/'+ctx.req.file.filename//返回文件名
    }
})


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