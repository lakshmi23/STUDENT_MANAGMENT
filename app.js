const express= require('express');
const dotenv= require('dotenv')
const morgan = require('morgan')
const bodyparser = require('body-parser')
const path = require('path');

//db connection

const connectDB = require('./server/database/connection')

const app = express();

dotenv.config({path:'convig.env'})
const PORT = process.env.PORT || 8080

//log requests
app.use(morgan('tiny'));


//adding body parser
app.use(bodyparser.urlencoded({extended:true}))
app.use(bodyparser.json());


//set view engine
app.set('view engine','ejs' )


//load assets

app.use('/css',express.static(path.resolve(__dirname , "assets/css")))
// css/style.css
app.use('/js',express.static(path.resolve(__dirname , "assets/js")))

app.use('/images', express.static(path.resolve(__dirname, "assets/images")))



// we are not using routes directly we are making another file
app.use('/' , require('./server/routes/router'))
    



app.listen(3000);
