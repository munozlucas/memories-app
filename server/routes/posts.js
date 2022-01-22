import express from "express";
import auth from "../middleware/auth.js";

import { getPosts, getPost, createPost, updatePost, deletePost, likePost, searchPosts } from "../controllers/post.js";

const router = express.Router();

router.get("/search", searchPosts);
router.get("/", getPosts);
router.get("/:id", getPost);
router.post("/", auth, createPost);
router.patch("/:id", auth, updatePost);
router.delete("/:id", auth, deletePost);
router.patch("/:id/likePost", auth, likePost);

export default router;
