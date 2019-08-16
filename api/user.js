/*
 * @Description: api 写上具体的 SQL 语句
 * @Author: your name
 * @Date: 2019-08-14 17:40:56
 * @LastEditTime: 2019-08-16 16:10:44
 * @LastEditors: Please set LastEditors
 */

 import {　wantFindData, wantAddData, wantDeleData, wantExitData} from '../lib/processData'


 export const findUser =  async (ctx) => { // router 的回调函数 传过来ctx
   const statement = 'SELECT * FROM user2'
  await wantFindData(ctx, statement)   
}

export const register = async (ctx) => {
  // refer: https://github.com/mysqljs/mysql
  const statement = 'INSERT INTO user2 SET ?'

  console.log(ctx.request.body, 'ctx.request.body')
  
  await wantAddData(ctx, statement)
}
