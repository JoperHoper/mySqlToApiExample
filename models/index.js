"use strict";
const User = require("./user"); //require the model
const Post = require("./post"); // require the model
const Comment = require("./comment");

async function init() {
  await User.sync(); // sync the model
  await Post.sync();
  await Comment.sync();
  // also sync any extra models here
}

init();

Post.belongsTo(User, { foreignKey: "userId" }); // set up the relationship
User.hasMany(Post, { foreignKey: "userId" }); // set up the relationship
User.hasMany(Comment, { foreignKey: "userId" }); // set up the relationship
Post.hasMany(Comment, { foreignKey: "postId" });
Comment.belongsTo(User, { foreignKey: "userId" });
Comment.belongsTo(Post, { foreignKey: "postId" });

module.exports = {
  User, // export the model
  Post,
  Comment,
  // also export any extra models here
};
