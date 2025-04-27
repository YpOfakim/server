const express = require("express");
const genericServices = require("../Services/genericServices");

const router = express.Router();

router.get("/", async (req, res) => {
    try {
      // console.log(`in get all apartments routes`);
      const users = await usersServices.getAllUsers();
      res.status(200).json(apartments);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  router.get("/:id", async (req, res) => {
    try {
      const id = req.params.id;
      const user = await usersServices.getUserById(id);
      res.status(200).json(apartment);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  
router.post("/", async (req, res) => {
    try {
      const user = req.body;
      const newUser = await apartServices.createUser(user);
      res.status(201).json(newApartment);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

  module.exports=router;