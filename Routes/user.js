import {handleLogin, handleUserSignup} from "../Controller/user.js";
import express from "express";

const router = express.Router();

router.post('/login',handleLogin);
router.post('/singup',handleUserSignup);

export default router;