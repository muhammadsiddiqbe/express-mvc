import pg from "pg"
import config from '../../config.js'

const pool = new pg.Pool(config.DATABASE)

pool.connect((err, c) => {
  if (err) console.log(err)
})

const fetch = async (SQL, ...params) => {
  try {
    const client = await pool.connect()
    const { rows } = await client.query(SQL, params)

    return rows
  } finally {
    client.release()
  }
}

const fetchOne = async (SQL, ...params) => {
   try {
    const client = await pool.connect()
    const { rows: [row] } = await client.query(SQL, params)

    return row
  } finally {
    client.release()
  }
}

export { fetch, fetchOne }