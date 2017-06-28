// LOCAL DEV VARIABLES
let env = {
    NODE_ENV: 'development',
    PORT: 3000,
    DBPROTOCOL: 'mongodb',
    DBUSERNAME: 'elio',
    DBPASSWORD: 'rec4321',
    DBHOST: 'ds123752.mlab.com:23752',
    DBNAME: 'rland',
    SERVERNAME: 'dev-server'
};

// MAPS env TO ACTUAL ENVIRONMENT

Object.keys(env).forEach(v => {

    process.env[v] = process.env[v] || env[v];

});


// MongoDb Connection String Builder

env.CONNECTIONSTRING = `${env.DBPROTOCOL}://${env.DBUSERNAME}:${env.DBPASSWORD}@${env.DBHOST}/${env.DBNAME}`;
process.env.CONNECTIONSTRING = env.CONNECTIONSTRING;

exports = env;