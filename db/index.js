/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-14 16:10:14
 * @LastEditTime: 2019-08-14 16:18:10
 * @LastEditors: Please set LastEditors
 */
const mysql = require('mysql')

const connection = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: '123',
  database: 'blog'
})

exports.connect = () => {
  return new Promise((reslove, reject) => {
    connection.connect(err => {
      if(err){
        console.error('连接数据库错误', err)
        reject()
      }
      console.log('连接数据库blog 成功')
      reslove();
    });
    
  })
}
