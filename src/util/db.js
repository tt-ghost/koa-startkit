const mysql = require('mysql')
const fs = require('fs')
const path = require('path')
const db = require('../config/db')

const pool = mysql.createPool(db)

export function query(sql, values) {
  return new Promise((resolve, reject) => {
    pool.getConnection((err, connection) => {
      if (err) {
        reject(err)
      } else {
        connection.query(sql, values, (err2, rows) => {
          if (err2) {
            reject(err2)
          } else {
            resolve(rows)
          }
          connection.release()
        })
      }
    })
  })
}

export function execSQLFile(file) {
  const sql = fs.readFileSync(file, 'utf8')
  return query(sql, null)
}

export function initDB(files) {
  files.forEach(file => {
    const sql = path.resolve(__dirname, '../sql', `${file}.sql`)
    execSQLFile(sql)
  })
}
