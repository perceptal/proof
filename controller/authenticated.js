module.exports.ensure = function(req, res, next) {
  if (req.isAuthenticated()) { return next(); }
  res.redirect("/login");
}