const dotenv = require('dotenv');
dotenv.config();

const { 
    MONGO_URL
} = process.env;

const enviromentConfig = {
    mongo: {
        url: MONGO_URL,
    }
}

module.exports = enviromentConfig;