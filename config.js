export default {
  DATABASE: {
    host: process.env.HOST || 'localhost',
    user: process.env.DB_USER || 'postgres',
    password: process.env.DB_PASSWORD || 'pgpwd',
    database: process.env.DB_NAME || 'bobur',
    port: process.env.DB_PORT || 5432
  }
}