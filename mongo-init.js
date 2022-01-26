db.createUser(
  {
      user: "omm",
      pwd: "password",
      roles: [
          {
              role: "readWrite",
              db: "omm"
          }
      ]
  }
);