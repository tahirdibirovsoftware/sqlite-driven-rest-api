import { Router } from 'express';
import { UserService } from './user.service';
import { dbPromise } from './db.config';
import { UserController } from './user.contorller';


export const router = Router();

const init = async () => {

const db = await dbPromise;

const userService = new UserService(db);

const userController = new UserController(userService);

router.get('/users', userController.getAllUsers);
router.get('/user/:id', userController.getUser);
router.post('/user', userController.addUser);
router.put('/user/:id', userController.updateUser);
router.delete('/user/:id', userController.removeUser);


}

init().catch((err)=>{
    console.log(err)
})