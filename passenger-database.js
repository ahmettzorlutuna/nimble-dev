const BaseDatabase = require('./base-database')
const Passenger = require('./passenger')

class PassengerDatabase extends BaseDatabase{}

module.exports = PassengerDatabase(Passenger)