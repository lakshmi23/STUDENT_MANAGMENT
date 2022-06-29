const axios= require('axios');


exports.home= (req,resp) => {
    resp.render('home')
}




exports.teacherlogin= (req,resp) => {
    resp.render('techerlogin')
}




exports.homeRoutes = async (req,resp) => {
    // make a get request to /api/users
 
 try{
    const data = await   axios.get("http://localhost:3000/api/users")
    
 console.log(data.data);
 
 resp.render('index',{users: data.data});
}
catch(error){
    resp.send("error")
}
}

exports.add_user =(req,resp) => {
    resp.render('add_user')
}

exports.update_user = async(req,resp) => {
    try{
 const data = await  axios.get("http://localhost:3000/api/users", {params:{id:req.query.id}})
    resp.render('update_user', {user:data.data})
    }
    catch(error){
        resp.send("error");
    }
}
