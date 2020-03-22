const express = require('express'),
config = require ('./api/config/config')['dev'];
const app = express();
const port = process.env.PORT || 3000;
const mongoose = require('mongoose');

// Information sur la personne
require('./api/models/userModel');

// Informations générales
require('./api/models/bloodModel');
require('./api/models/heightModel');
require('./api/models/weightModel');

// Etat de santé
require('./api/models/allergyModel');
require('./api/models/meetingModel');
require('./api/models/diseaseModel');
require('./api/models/medicamentModel');
require('./api/models/surgeryModel');
require('./api/models/vaccinationModel');
require('./api/models/teethModel');
require('./api/models/treatingModel');

// Consultations médicales
require('./api/models/doctorModel');
require('./api/models/consultationModel');
require('./api/models/analysisModel');
require('./api/models/radiologyModel');
require('./api/models/treatingModel');

require('./api/config/express')(app);
// Mongoose Configuration
require('./api/config/mongoose')(config);

// Importing route
const userRoutes = require('./api/routes/userRoutes');
const infoRoutes = require('./api/routes/infoRoutes');
const santeRoutes = require('./api/routes/santeRoutes');
const statRoutes = require('./api/routes/statRoutes');
const medicalRoutes = require('./api/routes/medicalRoutes');
const doctorRoutes = require('./api/routes/doctorRoutes');
const meetingRoutes = require('./api/routes/meetingRoutes');

//register the route
userRoutes(app);
infoRoutes(app);
santeRoutes(app);
medicalRoutes(app);
doctorRoutes(app);
meetingRoutes(app);
statRoutes(app);

app.listen(port);

console.log('eSante RESTful API server started on: ' + port);
