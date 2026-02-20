import express from "express";
import { UserController } from "./user.controller";

const router = express.Router();

// GET 
router.get("/", UserController.getAllFromDB);
router.get("/:id", UserController.getUserById);

// CREATE 
router.post("/", UserController.createUser);

// UPDATE 
router.patch("/:id", UserController.updateUser);

// DELETE 
router.delete("/:id", UserController.deleteUser);

export const userRouter = router;
