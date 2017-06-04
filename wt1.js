module.exports = function(ctx, cb) {
  console.log("Webhook invoked blah");
  cb(null, { hello: ctx.data.name || 'Anonymous' });
};