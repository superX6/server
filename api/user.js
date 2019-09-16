/*
 * @Description: api 写上具体的 SQL 语句
 * @Author: your name
 * @Date: 2019-08-14 17:40:56
 * @LastEditTime: 2019-09-16 14:20:32
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
  await wantAddData(ctx, statement)
}

export const login = async (ctx) => {
  const username = ctx.request.body.username;
  console.log('need to find username: ' , username);
  const statement = `SELECT * FROM user2 WHERE username =  "${username}"`;
  await wantFindData(ctx, statement)
}
