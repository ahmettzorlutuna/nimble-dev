const BaseDatabase = require('./base-database')
const Driver = require('../models/driver')

class DriverDatabase extends BaseDatabase{
    
}

module.exports = new DriverDatabase(Driver)