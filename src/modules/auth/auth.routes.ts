import express from "express";
import { AuthController } from "./auth.controller";

const router = express.Router();

// login with username and password
router.post("/login", AuthController.loginWithEmailAndPassword);

// login google
router.post("/google", AuthController.authWithGoogle);

export const authRouter = router;
