import pg from "pg"
// const { Pool } = require("pg")
import config from '../../config.js'

const Pool = pg.Pool
const pool = new Pool(config.DATABASE)

pool.connect((err, c) => {
  if (err) console.log(err)
})

const fetch = async (SQL, ...params) => {
  const client = await pool.connect()

  try {
    const { rows } = await client.query(SQL, params)

    return rows
  } finally {
    client.release()
  }
}

const fetchOne = async (SQL, ...params) => {
  const client = await pool.connect()

  try {
    const { rows: [row] } = await client.query(SQL, params)

    return row
  } finally {
    client.release()
  }
}

export { fetch, fetchOne }