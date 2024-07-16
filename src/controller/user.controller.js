/**
 *
 * @param {import("express").Request} req
 * @param {import("express").Response} res
 * @param {import("express").NextFunction} next
 */
const getUser = (req, res, next) => {
  res.send("Test Message");
};

module.exports = {
  getUser,
};
