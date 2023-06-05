import { v4 as uuidv4 } from 'uuid';

let users = []

export const getUser = (req,res) =>{
    res.send(users);
}


export const createUser = (req, res) => {
    const postdata  = req.body;
    
    // create a new object userWithId  , spread postdata object and add id element
    const userWithId = {...postdata, id: uuidv4()}  
     
    users.push(userWithId);
        res.send(`user with the name ${postdata.firstName} added to the database`);
}


  export const getUserById = (req,res) =>{
    const {id} = req.params ;

    const foundUser = users.find((user) => user.id === id);
    res.send(foundUser);
}


export const deleteUser = (req,res) =>{
    const {id} = req.params ;

    //filter is used in array if its value is true it keep element in array but if value is false that element will be deleted from araay.
    // if user.id matches id then it will return false and hence the element will be deleted.
    users = users.filter((user) => user.id != id);
    res.send(`user with id ${id} deleted from the database.`);
}


export const patchUser = (req,res) => {
    const {id} = req.params;
    const {firstName, lastName, age} = req.body ;

    const user = users.find((user) => user.id === id);

    if (firstName) user.firstName = firstName;
    if (lastName) user.lastName = lastName;
    if (age) user.age = age ;

    res.send (`User with the id ${id} has been updated`);
}
