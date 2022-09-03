import express from 'express';

import { createUser, getusers, getUser, deleteUser, updateUser } from '../controllers/users.js';
const router = express.Router();




//all routes in here are starting with/all
router.get('/all/', getusers);


router.get('/random/', getusers);



//push
router.post('/save/', createUser);

//get data use in id
router.get('/:id', getUser);

router.delete('/delete/:id', deleteUser);

router.patch('/up/:id', updateUser);




export default router;