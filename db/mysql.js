/*
 * @Description: 创建数据库连接 Pool
 * @Author: your name
 * @Date: 2019-08-14 16:10:14
 * @LastEditTime: 2019-08-16 11:24:56
 * @LastEditors: Please set LastEditors
 */
const mysql = require('mysql')

const pool = mysql.createPool({
  connectionLimit: 10,
  host: '127.0.0.1',
  user: 'root',
  password: '123',
  database: 'blog'
})


/**
 * 
 * @param {String} connectQuery 增删改查的方法名
 * @param {String} statements sql query 语句
 * @param {String} parameter 
 */
export const poolFn = (connectQuery, statements, parameter) => {
  return new Promise((resolve, reject) => {
    pool.getConnection((err, connection) => {
      if(err) reject('建立连接池失败')
      connectQuery(connection, statements, parameter).then(data => {
        // 操作成功  释放连接池
        connection.release();
        resolve(data)
      })
    })
  }) 
}

// 查询数据
function connecQueryFind(connection, statements) {
  　　return new Promise((resolve, reject) => {
  　　　　connection.query(statements, (err, result) => {
  　　　　　　if(err) {
  　　　　　　　　throw err;
  　　　　　　　　reject('查询失败');
  　　　　　　}
  　　　　　　resolve(result);
  　　　　});
  　　})
  }
  
  // 添加数据
  function connecQueryAdd(connection, statements, parameter) {
  　　return new Promise((resolve, reject) => {
  　　　　connection.query(statements, parameter, (err, result) => {
  　　　　　　if(err) {
  　　　　　　　　throw err;
  　　　　　　　　reject('添加失败');
  　　　　　　}
  　　　　　　resolve(result);
  　　　　});
  　　})
  }
  
  // 删除数据
  function connecQueryDele(connection, statements) {
  　　　return new Promise((resolve, reject) => {
  　　　　connection.query(statements, (err, result) => {
  　　　　　　if(err) {
  　　　　　　　　throw err;
  　　　　　　　　reject('删除失败');
  　　　　　　}
  　　　　　　resolve(result);
  　　　　});
  　　})
  }
  
  // 修改数据
  function connecQueryExit(connection, statements, parameter) {
  　　return new Promise((resolve, reject) => {
  　　　　connection.query(statements, parameter, (err, result) => {
  　　　　　　if(err) {
  　　　　　　　　throw err;
  　　　　　　　　reject('修改失败');
  　　　　　　}
  　　　　　　resolve(result);
  　　　　});
  　　})
  }
  
  // 将方法封装统一导出
  
  function queryFn(connecQuery, statements, parameter) {
  　　return new Promise((resolve) => {
  　　　　poolFn(connecQuery, statements, parameter).then(data => {
  　　　　　　resolve(data);
  　　　　});
  　　});
  }


  module.exports = {
    　　findData(statements, parameter) {
    　　　　return queryFn(connecQueryFind, statements, parameter);
    　　},
    　　addData(statements, parameter) {
    　　　　return queryFn(connecQueryAdd, statements, parameter);
    　　},
    　　deleData(statements, parameter) {
    　　　　return queryFn(connecQueryDele, statements, parameter);
    　　},
    　　exitData(statements, parameter) {
    　　　　return queryFn(connecQueryExit, statements, parameter);
    　　}
    };

// export default pool
