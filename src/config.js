import knex from 'knex'

export const client = knex({
  client: 'pg',
  version: '7.2',
  connection: {
    host : 'lallah.db.elephantsql.com',
    //user e database sao iguais no elephantsql
    user : 'fctqhhgu',
    password : 'gmaKD1QQE6mIgHRKYXy-Xe-HHhvq2dqA',
    database : 'fctqhhgu'
  }
});
