import express from 'express';

import { createUser, getusers, getUser, deleteUser, updateUser } from '../controllers/users.js';
const router = express.Router();









//all routes in here are starting with/all
router.get('/', getusers);



//push
router.post('/', createUser);

//get data use in id
router.get('/:id', getUser);

router.delete('/:id', deleteUser);

router.patch('/:id', updateUser);




export default router;