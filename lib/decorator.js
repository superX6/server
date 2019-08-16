/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-14 16:46:06
 * @LastEditTime: 2019-08-14 17:27:19
 * @LastEditors: Please set LastEditors
 */
/**
 * Decorator 只能作用于类或者类的方法上
 * 如果一个类和类的方法都用了Decorator 类方法的Decorator 优先于执行
 */


const Router = require('koa-router')
const { resolve } = require('path')
const _ =require('lodash')
const glob = require('glob')
const R = require('ramda')

// ES6引入了一种新的原始数据类型Symbol，表示独一无二的值
const symbolPrefix = Symbol('prefix')
const routerMap = new Map()

const isArray = c => _.isArray(c) ? c : [c] //定义一个函数，如果c是数组，返回这个数组，如果不是，封装成数组，再返回,  isArray是lodash的内置函数

export class Route {
    
    constructor (app, apiPath) { //注意创建路由实例时传入的两个参数
        this.app = app
        this.apiPath = apiPath
        this.router = new Router()
      }

    init () {
        glob.sync(resolve(this.apiPath, './**/*.js')).forEach(require)//将所有routes目录下的路由文件引用进来

        for (let [conf, controller] of routerMap) {
            const controllers = isArray(controller)
            const prefixPath = conf.target[symbolPrefix]

            if (prefixPath) prefixPath = normalizePath(prefixPath)

            const routerPath = prefixPath + conf.path
            this.router[conf.method](routerPath, ...controllers)
        }

        this.app.use(this.router.routes())
        this.app.use(this.router.allowedMethods())
    }
}


const normalizePath = path => path.startsWith('/') ? path : `/${path}`

const router = conf => (target, key, descriptor) => {
    conf.path = normalizePath(conf.path)

    routerMap.set({
        target: target,
        ...conf
    }, target[key])
}

export const controller = path => target =>(target.prototype[symbolPrefix] = path)

//定义router中常见的六个方法，并暴露出去,这里对应的是方法的装饰器
export const get = path => router({
    method: 'get',
    path: path
})

export const post = path => router({
    method: 'post',
    path: path
})

export const put = path => router({
    method: 'put',
    path: path
})

export const del = path => router({
    method: 'delete',
    path: path
})

export const use = path => router({  //使用中间件
    method: 'use',
    path: path
})

export const all = path => router({  
    method: 'all',
    path: path
})

const decorate = (args, middleware) => {
    let [ target, key, descriptor ] = args
  
    target[key] = isArray(target[key])
    target[key].unshift(middleware)
  
    return descriptor
  }
  
const convert = middleware => (...args) => decorate(args, middleware)

