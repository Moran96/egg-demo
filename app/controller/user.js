exports.index = function* (ctx) {
    ctx.body = yield ctx.model.User.find()
    console.log(ctx.body)
}
