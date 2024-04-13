const express = require('express');
const morgan = require('morgan');
require ('dotenv').config();
 require('./database/connections');
const employeeRoute = require('./routes/userRoutes');
const dataRoutes = require('./routes/employeeRoutes');
const normaluser = require('./routes/normaluserRoutes');
const viewData = require('./routes/viewRoutes')
const PORT = process.env.PORT;

const app = express();
const path = require('path');
app.use(express.static(path.join(__dirname,'/build')));



const cors = require('cors')

app.use(morgan('dev'));
app.use(cors())

app.use('/admin', employeeRoute)
app.use('/admin', dataRoutes)
app.use('/user', normaluser)
app.use('/user', viewData)
app.get('/*', function(req, res) {res.sendFile(path.join(__dirname,'/build/index.html')); }); 


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});