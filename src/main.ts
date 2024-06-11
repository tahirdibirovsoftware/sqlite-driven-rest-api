import express from 'express';
import { router } from './routes';
import { initializeDatabase } from './db.config';


const app = express();
app.use(express.json());
app.use(router);
const PORT = 4500;






initializeDatabase().then(()=>{
    app.listen(PORT, ()=>{
        console.log(`Server is running on ${PORT}`);
    })
}).catch(err=>{
    console.log(`Occured unexpected error: ${err}`)
})
