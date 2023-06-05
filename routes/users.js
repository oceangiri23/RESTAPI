import express from 'express';

import { v4 as uuidv4 } from 'uuid';
 

const router = express.Router();


const users = []


// all routes in here are starting with /users.
router.get('', (req,res) =>{
    res.send(users);
})


router.post('/',(req,res) => {
const postdata  = req.body;

// create a new object userWithId  , spread postdata object and add id element
const userWithId = {...postdata, id: uuidv4()}  
 
users.push(userWithId);
    res.send(`user with the name ${postdata.firstName} added to the database`);
});


router.get('/:id', (req,res) =>{
    res.send('THE GET IF ROUTE IS ON')
})



export default router ;