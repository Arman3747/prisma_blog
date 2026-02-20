import express from "express";
import { PostController } from "./post.controller";

const router = express.Router();

// CREATE
router.post("/", PostController.createPost);

//GET
router.get("/", PostController.getAllPosts);
router.get("/:id", PostController.getPostById);

// UPDATE
router.patch("/:id", PostController.updatePost);

//DELETE
router.delete("/:id", PostController.deletePost);

export const postRouter = router;
