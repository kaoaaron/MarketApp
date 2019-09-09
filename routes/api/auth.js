const express = require("express");
const router = express.Router();
const User = require("../../models/User");
const UserSession = require("../../models/UserSession");

router.post("/api/account/signup", (req, res, next) => {
  const { body } = req;
  const { firstName, lastName, password } = body;
  let { email } = body;

  if (!userName) {
    return res.send({
      success: false,
      message: "Error: User name is blank"
    });
  }
  if (!password) {
    return res.send({
      success: false,
      message: "Error: Password is blank"
    });
  }
  if (!email) {
    return res.send({
      success: false,
      message: "Error: Email is blank"
    });
  }

  email = email.toLowerCase();

  User.find(
    {
      email: email
    },
    (err, previousUsers) => {
      if (err) {
        return res.send("Error: Server Error");
      } else if (previousUsers.length > 0) {
        return res.send("Account already exists");
      } else {
        const newUser = new User();

        newUser.email = email;
        newUser.firstName = firstName;
        newUser.lastName = lastName;
        newUser.password = newUser.generateHash(password);
        newUser.save((err, user) => {
          if (err) {
            return res.send({
              success: false,
              message: "Error: Server Error"
            });
          }
          return res.send({
            success: true,
            message: "signed up"
          });
        });
      }
    }
  );
});

router.post("/api/account/signin", (req, res, next) => {
  const { body } = req;
  const { password } = body;
  let { email } = body;

  if (!password) {
    return res.send({
      success: false,
      message: "Error: Password is blank"
    });
  }
  if (!email) {
    return res.send({
      success: false,
      message: "Error: Email is blank"
    });
  }
  email = email.toLowerCase();

  User.find(
    {
      email: email
    },
    (err, users) => {
      if (err) {
        return res.send({
          success: false,
          message: "Error: server error"
        });
      }
      if (users.length != 1) {
        return res.send({
          success: false,
          message: "Error: invalid"
        });
      }

      const user = users[0];
      if (!user.validPassword(password)) {
        return res.send({
          success: false,
          message: "Error: invalid password"
        });
      }

      const userSession = new UserSession();
      userSession.userId = user._id;
      userSession.save((err, doc) => {
        if (err) {
          return res.send({
            success: false,
            message: "Error: server error"
          });
        }

        return res.send({
          success: true,
          message: "Valid signin",
          token: doc._id
        });
      });
    }
  );
});

router.get("/api/account/verify", (req, res, next) => {
  const { query } = req;
  const { token } = query;

  UserSession.find(
    {
      _id: token,
      isDeleted: false
    },
    (err, sessions) => {
      if (err) {
        return res.send({
          success: false,
          message: "Error: server error"
        });
      }

      if (sessions.length != 1) {
        return res.send({
          success: false,
          message: "Error: invalid"
        });
      } else {
        return res.send({
          success: true,
          message: "good"
        });
      }
    }
  );
});

router.get("/api/account/logout", (req, res, next) => {
  const { query } = req;
  const { token } = query;

  UserSession.findOneAndUpdate(
    {
      _id: token,
      isDeleted: false
    },
    {
      $set: {
        isDeleted: true
      }
    },
    null,
    (err, sessions) => {
      if (err) {
        return res.send({
          success: false,
          message: "Error: server error"
        });
      }

      return res.send({
        success: true,
        message: "good"
      });
    }
  );
});

module.exports = router;
