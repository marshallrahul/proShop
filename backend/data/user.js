import bcrypt from "bcryptjs";

const users = [
  {
    name: "Admin User",
    email: "admin@example.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "Jhon Doe",
    email: "jhon@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "Jane User",
    email: "janen@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
];

export default users;
