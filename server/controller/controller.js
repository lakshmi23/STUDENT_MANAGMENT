var Userdb = require('../model/model.js');


// create and save new user 

exports.create = async (req, resp) => {
    //validate request
    if (!req.body) {
        resp.status(400).send({ message: "content can not be empty" })
        return;
    }

    // save user in the data base 
    try {
        const user = new Userdb(req.body)
        const result = await user.save();
        console.log(result);
        // resp.send(result);
        resp.redirect('/add-user');
    }
    catch (err) {

        resp.status(500).send({ message: "some error occured" })
    }
    console.log(req.body);

}

// retrieve and return all user 
// retrive and return a single user

exports.find = async (req, resp) => {
   
   if(req.query.id){
const id= req.query.id;
try{
const data = await Userdb.findById(id)
if(!data){
   resp.status(404).send({message:"not found id"}) 
}
else{
    resp.send(data);
}
}
 catch(e){
resp.status(500).send({message:"error in finding id"})
 }

   }
   
   else
{   
    try {
        const user = await Userdb.find();
        resp.send(user);
    }
    catch {
        resp.status(500).send({ message: "some error occured while getting user info" })
    }
}
}











//update a new indetified id using usn

exports.update = async (req, resp) => {
    if (!req.body) {
        resp.status(400).send({ message: "data to update can not be empty" })
    }

    const id = req.params.id;

    try {
        const data2 = await Userdb.findByIdAndUpdate(
            id,
            req.body,
            { new: true },
        )

        if (!data2) {
            resp.status(404).send({ message: `cannot update user with ${id}.maybe user not found` })
        }
        else {
            resp.send(data2)
        }
}
    catch (err) {
        resp.status(500).send({ message: "error updating user" })
    }



}

//delete a user with specified user id in the request

exports.delete = async (req, resp) => {
const id= req.params.id;
console.log(id);
try{
const data = await Userdb.findByIdAndDelete(id);
 if(!data){
    resp.send({message:"user of given id doesnt exist"})
 }
 else{
    resp.send({
        message : "User was deleted successfully!"
    })
 }
}
catch{
    resp.status(500).send({message:"somehting went wrong"})
}
}