const { faker } = require("@faker-js/faker");
const { User } = require("../models");

faker.locale = "es";

module.exports = async () => {
  const users = [];

  for (let i = 1; i < 11; i++) {
    users.push({
      firstname: `firstName${i}`,
      lastname: `lastName${i}`,
      email: `email${i}@examplemail.com`,
      password: `password${i}`,
    });
  }

  await User.bulkCreate(users);
  console.log("[Database] Se corrió el seeder de Users.");
};
