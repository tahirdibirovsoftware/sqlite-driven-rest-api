import { DB } from "./db.config"

export class UserService{

    constructor(private readonly db :DB){}

    addUser = async (email: string, username: string) =>{
        return await this.db.run(`
            
            INSERT INTO users (email, username)
            VALUES(?, ?)
            
            `,[email, username])
    } 


    deleteUser = async (id: number) => {
        return await this.db.run(`
            
            DELETE FROM users WHERE id=?

            `, [id])
    }


    getAllUsers = async () => {
        return await this.db.all(`
            SELECT * FROM users
            `)
    }


    updateUser = async (name: string, id: number) => {
        return await this.db.run(
            `
            UPDATE users SET username=? WHERE id=?
            `
        ,[name, id])
    }


    getUserById = async (id: number) => {
        return await this.db.get(`
            
            SELECT * FROM users WHERE id=?
            
            `, [id]);
    }


}