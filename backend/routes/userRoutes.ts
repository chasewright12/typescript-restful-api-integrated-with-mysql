import express, { Router } from 'express';
import UserController from '../controller/userController';
import { authMiddleware } from '../middleware/authMiddleware';

const router: Router = express.Router();

router.get('/', authMiddleware, UserController.getUsers);

router.get('/:id', authMiddleware, UserController.getUserById);

router.post('/', UserController.createUser);

router.put('/:id', authMiddleware, UserController.updateUser);

router.delete('/:id', authMiddleware, UserController.deleteUser);

export default router;