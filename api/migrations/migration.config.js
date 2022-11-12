module.exports = {
  'sql-file': true,
  default: {
    driver: 'mysql',
    port: { ENV: 'DB_PORT' },
    host: { ENV: 'DB_HOST' },
    user: { ENV: 'DB_USER' },
    password: { ENV: 'DB_PASSWORD' },
    database: { ENV: 'DB_DEFAULT' },
    multipleStatements: true,
  }
};
