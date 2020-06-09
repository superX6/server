/*
 * @Description: api 写上具体的 SQL 语句
 * @Author: your name
 * @Date: 2019-08-14 17:40:56
 * @LastEditTime : 2020-01-02 17:37:52
 * @LastEditors  : xiancq
 * @refer: https://github.com/mysqljs/mysql
 */

 import {　wantFindData, wantAddData, wantDeleData, wantExitData} from '../lib/processData'


 export const findUser =  async (ctx) => { // router 的回调函数 传过来ctx
  // ctx.set('Access-Control-Allow-Origin', '*');
  // ctx.set('Access-Control-Allow-Headers', 'Content-Type, myheader');
  // ctx.set('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
   const statement = 'SELECT * FROM user2'
  await wantFindData(ctx, statement)   
}

export const register = async (ctx) => {
  const statement = 'INSERT INTO user2 SET ?'
  await wantAddData(ctx, statement)
}

export const login = async (ctx) => {
  const username = ctx.request.body.username;
  // console.log('need to find username: ' , username);
  const statement = `SELECT * FROM user2 WHERE username =  "${username}"`;
  await wantFindData(ctx, statement)
}
