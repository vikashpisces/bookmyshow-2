module.exports.authenticate = async function () {
  try {
    await this.authenticate()
    console.log('MYSQL Connection has been established successfully.');
  } catch (error) {
    console.log('Unable to connect to the MYSQL database:', error);
    process.exit(1);
  }
}

module.exports.syncModelsToDB = async function () {
  await this.sync({ force: true})
  console.log('All Models are synced with database successfully.');
};