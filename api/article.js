
import {　wantFindData, wantAddData, wantDeleData, wantExitData} from '../lib/processData'

export const createArticle = async (ctx) => {
  const statement = 'INSERT INTO articles SET ?'
  await wantAddData(ctx, statement)
}

export const findAllArticles = async (ctx) => {
  const pageNo = ctx.request.query.pageNo || 1;
  const limit = 10 * (pageNo - 1);
  const offset = 10 * pageNo;
  const statement = `SELECT * FROM articles ORDER BY update_time DESC limit ${limit}, ${offset}`;
  console.log(statement, 'statement')
  await wantFindData(ctx, statement); 
}

export const getrticle = async(ctx) => {
  const id = ctx.request.query.id;
  // console.log(ctx.request)
  const statement = `SELECT * FROM articles WHERE id='${id}'`;
  
  await wantFindData(ctx, statement)
}

export const deleteArticle = async(ctx) => {
  const id = ctx.request.body.id;
  const statement = `DELETE FROM articles WHERE id=${id}`;
  await wantFindData(ctx, statement)
}
