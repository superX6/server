/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-16 09:36:39
 * @LastEditTime: 2019-08-16 09:55:51
 * @LastEditors: Please set LastEditors
 */
const bodyParser = require('koa-bodyparser')

// 解析返回体的中间件
export const addBodyParser = app => app.use(bodyParser())

