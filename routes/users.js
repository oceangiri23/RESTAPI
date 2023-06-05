import express from 'express';

import { v4 as uuidv4 } from 'uuid';
 

const router = express.Router();


let users = []


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

//getwithid
router.get('/:id', (req,res) =>{
    const {id} = req.params ;

    const foundUser = users.find((user) => user.id === id);
    res.send(foundUser);
});

//delete 
router.delete('/:id', (req,res) =>{
    const {id} = req.params ;

    //filter is used in array if its value is true it keep element in array but if value is false that element will be deleted from araay.
    // if user.id matches id then it will return false and hence the element will be deleted.
    users = users.filter((user) => user.id != id);
    res.send(`user with id ${id} deleted from the database.`);
});


export default router ;