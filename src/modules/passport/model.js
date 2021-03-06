/**
 * passport model
 */
const BaseModel = require('../../base/model')
const SQL = require('./sql')

class PassportModel extends BaseModel {
  login(user) {
    const { username, pwd } = user
    return this.query(SQL.PASSPORT_LOGIN, [username, pwd])
  }

  reg(user) {
    const { username, pwd } = user
    return this.query(SQL.PASSPORT_REG, [username, pwd])
  }
}

module.exports = PassportModel
