const Router = require('koa-router')
const bodyParser = require('koa-bodyparser')
// const { graphql } = require('graphql')
const myGraphQLSchema = require('../schema/article')
const { graphqlKoa, graphiqlKoa } = require('apollo-server-koa')

// import * as mount from 'koa-mount'
// import * as convert from 'koa-convert'

const router = new Router()

/// V2
// router.post('/graphql', (ctx, next) => {
//   //GraphQL executor
//   console.log(ctx.request.body)
//   graphql(myGraphQLSchema, ctx.request.body)
//   .then((result) => {
//     ctx.body = result // res.send(JSON.stringify(result, null, 2));
//   })
// });


/// V1
router.post('/graphql', bodyParser(), graphqlKoa({ schema: myGraphQLSchema }));
router.get('/graphql', graphqlKoa({ schema: myGraphQLSchema }));

router.get('/graphiql', graphiqlKoa({ endpointURL: '/graphql' }));

export default router
