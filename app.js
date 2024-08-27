const express = require('express');
const path = require('path');
const mysql = require('mysql');
const app = express();
const port = 3000;



app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'newweb.html'));
});


const feedbackRouter = require('./feedback.js');
const contactusRouter = require('./contactus.js');
const appointmentRouter = require('./appointment.js');
const accountRouter = require('./createaccount.js'); 
const donorRouter = require('./donordata.js'); 
const patientrouter = require('./patientdata.js'); 
const signupRouter = require('./signup.js'); 
const bloodBankRouter= require('./bloodbank.js')

app.use('/feedback', feedbackRouter);
app.use('/contactusform', contactusRouter);
app.use('/appointmentform', appointmentRouter);
app.use('/account', accountRouter);
app.use('/donorform', donorRouter);
app.use('/patient', patientrouter);
app.use('/loginform', signupRouter);
app.use('/bloodtypes', bloodBankRouter)



app.use(express.static('public'));
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send(`Something broke! ${err.message}`); 
});


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
