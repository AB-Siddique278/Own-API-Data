import { v4 as uuidv4 } from 'uuid';

let users = [
    {
        gender: "male",
        name: "Abu Bakar siddique",
        contact: "01789848646",
        address: "Dhaka Bangladesh",
        photoUrl: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80",
        id:"1"
    
    },
    {
        gender: "male",
        name: "Hridoy",
        contact: "01789848646",
        address: "Barisal Bangladesh",
        photoUrl: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80",
        id:"2"
    }
]





export const getusers = (req, res) => {
    console.log(users);
    res.send(users);
}





export const createUser = (req, res) => {
    const user = req.body;

    users.push({ ...user, id: uuidv4() });

    res.send(`user Name add ${user.name} Successfully`)
}

export const getUser = (req, res) =>{
    const {id} = req.params;
    const foundUser = users.find((user)=> user.id == id);
    res.send(foundUser);

}
export const deleteUser =(req, res) =>{
    const { id } = req.params;
    users= users.filter((user) => user.id !== id);
    res.send(`user with the id ${id} deleted form the database`);


}

export const updateUser= (req, res) =>{
    const { id } = req.params;

    const { gender, name, contact, address,photoUrl }= req.body
    const user = users.find((user) => user.id ==id);

    if(gender){
        user.gender=gender;
    }

    if(name){
        user.name=name;
    }

    if(contact){
        user.contact=contact;
    }

    if(address){
        user.address=address;
    }

    if(photoUrl){
        user.photoUrl=photoUrl;
    }

    res.send(`User with the id ${id} has been update`);



}

