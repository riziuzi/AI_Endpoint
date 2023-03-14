const express =  require('express');
require('dotenv').config()
const expressLayouts = require('express-ejs-layouts')   //middleware
const mongoose = require('mongoose');


//DB Mongoos connect

const db = require('./config/keys.js').MongoURI;

mongoose.connect(db, {useNewUrlParser : true})
.then(()=>console.log("MongoDB Connected ..."))
.catch(err=>console.log(err))



// express instantiation
const app = express();

app.use(expressLayouts);                //middleware will modify our res.render() calls
app.set('view engine', 'ejs');          // this engine is used to separate the presentation logic from the application logic.

// bodyParser

app.use(express.urlencoded( {extended: false}));


//Routes
app.use('/', require('./routes/index'));
app.use('/user', require('./routes/user'));




const PORT = process.env.PORT || 8080 ;

app.listen(PORT, console.log(`Server started listening on ${PORT} port`));
