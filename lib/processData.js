/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-16 11:27:34
 * @LastEditTime: 2019-09-16 14:32:23
 * @LastEditors: Please set LastEditors
 */
const {
  　　findData,
  　　addData,
  　　deleData,
  　　exitData
  } = require('../db/mysql')

  // 这边通过async方法保证数据的同步获取

let wantFindData = async(ctx, statements) => { // 获取数据
   　　// 返回的数据格式为json
  　　ctx.response.type = 'json'; 
  　　await findData(statements).then(data => {    
      ctx.body = data;
    }, () => {
  　　　　ctx.body = { err: '数据获取失败' };
  　　});
  };
  
  let wantAddData = async(ctx, statements) => { // 添加数据
  　　let res = ctx.request.body;
  　　ctx.response.type = 'json';
      // console.log(statements, res, 'statements, parameter')
      
  　　await addData(statements, res).then(data => {
  　　　　ctx.body = {data: data, success: 'true'};
  　　　}, () => {
  　　　　ctx.body = { err: '数据添加失败' };
  　　});
  };
  
  // 删除和修改数据还没有做
  let wantDeleData = async(ctx, statements) => { // 删除数据
  　　let res = ctx.query;
  　　ctx.response.type = 'json';
  　　await deleData(statements).then(data => {
  　　　　ctx.body = data;
  　　}, () => {
  　　　　ctx.body = { err: '数据删除失败' };
  　　});
  };
  
  let wantExitData = async(ctx , statements) => { // 修改数据
  　　let res = ctx.request.body;
  　　ctx.response.type = 'json';
  　　await exitData(statements, res).then(data => {
  　　　　ctx.body = data;
  　　}, () => {
  　　　　ctx.body = { err: '数据修改失败' };
  　　});
  };
  
  module.exports = {
  　　wantFindData,
  　　wantAddData,
  　　wantDeleData,
  　　wantExitData
  };