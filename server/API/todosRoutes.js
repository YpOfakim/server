const express = require("express");
const genericServices = require("../Services/genericServices");

const router = express.Router();

router.get("/", async (req, res) => {
    try {
        const userId = req.query.userId;

        let todos;
        if (userId) {
            todos = await genericServices.getRecordsByColumn("todos", "user_id", userId);
        } else {
            todos = await genericServices.getAllRecords("todos");
        }

        res.status(200).json(todos);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.post("/", async (req, res) => {
    try {
        const newTodo = req.body;
        const created = await genericServices.createRecord("todos", newTodo);
        res.status(201).json(created);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.delete("/:id", async (req, res) => {
    try {
        const id = req.params.id;
        await genericServices.deleteRecord("todos", "id", id);
        res.status(204).send(); // No content
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.patch("/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const updates = req.body;
        const updated = await genericServices.updateRecord("todos", "id", id, updates);
        res.status(200).json(updated);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});



module.exports = router;
