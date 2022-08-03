const { faker } = require("@faker-js/faker");
const { Comment } = require("../models");

faker.locale = "es";

module.exports = async () => {
  const comments = [];

  for (let i = 0; i < 10; i++) {
    comments.push({
      content: faker.lorem.paragraphs(2),
      userId: Math.floor(Math.random() * (10 - 1 + 1) + 1),
      articleId: Math.floor(Math.random() * (10 - 1 + 1) + 1),
    });
  }

  await Comment.bulkCreate(comments);
  console.log("[Database] Se corrió el seeder de Comments.");
};
