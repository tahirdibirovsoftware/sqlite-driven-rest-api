import { Request, Response } from "express"
import { UserService } from "./user.service"

export class UserController {


    constructor(private readonly userService: UserService){}

    addUser = async (req: Request, res: Response)=>{
        const {email, username} = req.body;
       this.userService.addUser(email, username);
       res.send(await this.userService.getAllUsers())

    }

    getUser = async (req: Request, res: Response)=>{
        const {id} = req.params;
        res.send (await this.userService.getUserById(+id))
    }

    getAllUsers = async (req: Request, res: Response)=>{
        res.send(await this.userService.getAllUsers())
    }

    removeUser = async (req: Request, res: Response)=>{
        res.send(await this.userService.getAllUsers())
    }

    updateUser = async (req: Request, res: Response)=>{
        const {username} = req.body;
        const {id} = req.params;
       await this.userService.updateUser(username, +id);
        res.send(await this.userService.getAllUsers())
    }

}