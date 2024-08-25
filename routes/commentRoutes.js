const express = require("express");

const router = express.Router();

const Controllers = require("../controllers");
// matches GET requests sent to /api/post
// (the prefix from server.js)

router.get("/", (req, res) => {
  Controllers.commentController.getComments(res);
});

router.post("/create", (req, res) => {
  Controllers.commentController.createComment(req.body, res);
});

// matches POST requests sent to /api/post/create
router.post("/:id", (req, res) => {
  Controllers.commentController.getCommentByPostId(req.body, res);
});

module.exports = router;
