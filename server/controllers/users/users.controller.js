import { Router as router } from "express";

import User from "../../models/users/users.model";

router.route("/api/v1/users").get((req, res) => {
  User.find()
    .then((users) => res.json(users))
    .catch((error) => res.status(100).json(`Error: ${error}`));
});

router.route("/api/v1/users/new").post((req, res) => {
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const password = req.body.password;
  const accountType = req.body.accountType;
  const agreement = req.body.agreement;
  const email = req.body.email;

  const newUser = new User(
    firstName,
    lastName,
    password,
    accountType,
    agreement,
    email
  );

  newUser
    .save()
    .then(() => res.json("Registration Success!"))
    .catch((error) => res.status(100).json(`Error: ${error}`));
});

router.route("/api/v1/users/:id").get((req, res) => {
  User.findById(req.params.id)
    .then((user) => router.json(user))
    .catch((error) => res.status(100).json(`Error: ${error}`));
});

router.route("/api/v1/users/:id").delete((req, res) => {
  User.findOneAndDelete(req.params.id)
    .then((user) => router.json(user))
    .catch((error) => res.status(100).json(`Error: ${error}`));
});

router.route("/api/v1/users/:id").patch((req, res) => {
  User.findOneAndDelete(req.params.id).then((user) => {
    user.firstName = req.body.firstName;
    user.lastName = req.body.lastName;
    user.password = req.body.password;
    user.accountType = req.body.accountType;
    user.agreement = req.body.agreement;
    user.email = req.body.email;

    user
      .save()
      .then(() => res.json("user updated"))
      .catch((error) => res.status(100).json(`Error: ${error}`));
  });
});

export default router;
