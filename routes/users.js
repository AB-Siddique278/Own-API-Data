import express from 'express';
import { v4 as uuidv4 } from 'uuid';

const router = express.Router();

const users = [
    {
        grnder: "male",
        name: "Abu Bakar siddique",
        contact: "01789848646",
        address: "Dhaka Bangladesh",
        photoUrl: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80"
    
    },
    {
        grnder: "male",
        name: "Hridoy",
        contact: "01789848646",
        address: "Barisal Bangladesh",
        photoUrl: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80"
    
    }
]







//all routes in here are starting with/all
router.get('/', (req, res) => {
    console.log(users);
    res.send(users);
});

//push
router.post('/', (req, res) => {
    const user = req.body;

    //const userId = uuidv4(); // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'


    users.push({ ...user, id: uuidv4() });

    res.send(`user name add ${user.name} success`)
});



export default router;