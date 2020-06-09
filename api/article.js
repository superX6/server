
import {　wantFindData, wantAddData, wantDeleData, wantExitData} from '../lib/processData'

export const createArticle = async (ctx) => {
  const statement = 'INSERT INTO articles SET ?'
  await wantAddData(ctx, statement)
}

export const findAllArticles = async (ctx) => {
  const statement = 'SELECT * FROM articles ORDER BY update_time DESC';
  await wantFindData(ctx, statement); 
}