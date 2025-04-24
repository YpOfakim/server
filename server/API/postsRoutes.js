const express = require("express");
const genericServices = require("../Services/genericServices");

const router = express.Router();

router.get("/posts", async (req, res) => {
    try {
        const posts = await genericServices.getAllRecords("posts");
        res.status(200).json(posts);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});
//לשנות את הניתוב לפי הצורך
router.get("/posts/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const post = await genericServices.getRecordById("posts", "post_id", id);
        res.status(200).json(post);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.post("/posts", async (req, res) => {
    try {
        const post = req.body;
        const newPost = await genericServices.createRecord("posts", post);
        res.status(201).json(newPost);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});
router.delete("/:id", async (req, res) => {
    try {
        const id = req.params.id;
        await genericServices.deleteRecord("posts", "post_id", id);
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});
router.put("/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const post = req.body;
        const updatedPost = await genericServices.updateRecord("posts", "post_id", id, post);
        res.status(200).json(updatedPost);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;