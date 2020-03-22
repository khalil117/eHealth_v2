module.exports = function (app) {
    var treatingCtrl = require('../controllers/treatingController');
    var cors = require('cors');

    // sante Routes
    app.use(cors());

