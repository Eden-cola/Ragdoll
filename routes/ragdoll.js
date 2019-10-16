const router = require('koa-router')()
const models = require('../models');

router.prefix('/ragdoll')

router.get('/:model', async (ctx) => {
  const { model } = ctx.params;
  const result = await models.getModel(model)
  .getListByWhere(ctx.query);
  //ctx.body = result.map(r => r.toOption());
  await ctx.render('ragdoll', {
    title: model,
    options: result.map(r => r.toOption()),
    detail: [],
  })
})

router.get('/:model/:id', async (ctx) => {
  const { model, id } = ctx.params;
  const result = await models.getModel(model)
  .getEntityById(id);
  //ctx.body = result.getOptions();
  await ctx.render('ragdoll', {
    title: result.getTitle(),
    options: result.getOptions(),
    detail: result.getDetail(),
  })
})

module.exports = router
