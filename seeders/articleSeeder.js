const { faker } = require("@faker-js/faker");
const { Article } = require("../models");
const slugify = require("slugify");
faker.locale = "es";

module.exports = async () => {
  const articles = [];

  for (let i = 0; i < 10; i++) {
    articles.push({
      title: faker.lorem.sentence(5),
      content: faker.lorem.paragraphs(),
      userId: Math.floor(Math.random() * (10 - 1 + 1) + 1),
      image: "07c9b78d5ca77833991477f00.jpg",
    });
    const slug = slugify(articles[i].title, {
      replacement: "-",
      remove: undefined,
      lower: true,
      remove: /[.]/g,
    });
    articles[i].urlSlug = slug;
  }

  await Article.bulkCreate(articles);
  console.log("[Database] Se corrió el seeder de Articles.");
};
