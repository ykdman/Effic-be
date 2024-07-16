/**
 *
 * @param {import("express").Request} req
 * @param {import("express").Response} res
 * @param {import("express").NextFunction} next
 */
function indexTest(req, res, next) {
  res.send("index TEst");
}

module.exports = {
  indexTest,
};
