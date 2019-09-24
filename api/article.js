/*
 * @Descripttion:   
 * @Author: xiancq
 * @Date: 2019-09-24 10:30:00
 * @LastEditTime: 2019-09-24 10:49:06
 */
import {　wantFindData, wantAddData, wantDeleData, wantExitData} from '../lib/processData'

export const createArticle = async (ctx) => {
  const statement = 'INSERT INTO articles SET ?'
  await wantAddData(ctx, statement)
}

export const findAllArticles = async (ctx) => {
  const statement = 'SELECT * FROM articles';
  await wantFindData(ctx, statement);
}