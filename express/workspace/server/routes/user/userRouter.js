import express from 'express';
import { deleteUser, loginUser, registerUser, updateUser, updatePicture } from '../../controller/user/user.js';

const userRouter = express.Router();

userRouter.post("/login", loginUser);
userRouter.post("/register", registerUser);
userRouter.put("/update", updateUser);
userRouter.delete("/delete", deleteUser);
userRouter.post("/picture", updatePicture);

export default userRouter;