import express from 'express';

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
export default router;