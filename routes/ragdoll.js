const router = require('koa-router')()

router.prefix('/ragdoll')

router.get('/:model', function (ctx, next) {
  ctx.body = 'this is a users response!'
})

router.get('/:model/:id', function (ctx, next) {
  ctx.body = 'this is a users/bar response'
})

module.exports = router
