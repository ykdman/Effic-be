const { v4 } = require("uuid");

/**
 *
 * @param {import("express").Request} req
 * @param {import("express").Response} res
 * @param {import("express").NextFunction} next
 */
function getTodos(req, res, next) {
  const todos = [
    {
      id: v4(),
      content: "Test1",
      priority: 1,
      done: false,
      date: new Date(),
    },
    {
      id: v4(),
      content: "Test2",
      priority: 2,
      done: false,
      date: new Date(),
    },
    {
      id: v4(),
      content: "Test3",
      priority: 3,
      done: false,
      date: new Date(),
    },
  ];

  res.status(200).json(todos);
}

module.exports = {
  getTodos,
};
