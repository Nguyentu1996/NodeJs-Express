require('rootpath')();
import express from 'express'; 
import errorHandler from './helper/errorhandler';
import cors from 'cors';
const app = express()
const port = 4000

app.use(cors());

app.use(
  express.urlencoded({
    extended: true
  })
)
// parse various different custom JSON types as JSON
app.use(express.json())


//Serves all the request which includes /images in the url from Images folder
app.use(express.static('public'));
app.use('/images', express.static(__dirname + '/images'));

  

app.use(function (req, res, next) {
  console.log('Time:', Date.now());
  next()
})


// api routes
app.use('/item', require('./Item/controller'));
// api login 
app.use('/login', require('./Login/controler'));
app.use('/user', require('./User/controler'));


// global error handler
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

