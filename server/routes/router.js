const express= require('express');
const route= express.Router()
const services = require('../services/render')
const controller = require('../controller/controller')


//home route
route.get('/', services.home)




//student marks managment
route.get('/student-marks' , services.homeRoutes);
    
// add- user    
route.get('/add-user',services.add_user)
 
//update-user
route.get('/update-user' , services.update_user)


// teacher login
route.get('/teacherlogin' , services.teacherlogin);


//API

route.post('/api/users' , controller.create);
route.get('/api/users' , controller.find);
route.put('/api/users/:id' , controller.update);
route.delete('/api/users/:id' , controller.delete);



 module.exports=route