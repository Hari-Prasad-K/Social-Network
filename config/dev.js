const { DB_NAME, DB_PASSWORD , DB_CLUSTER, JWT_SECRET } = require("./config")
module.exports={
    MONGOURI:`mongodb+srv://${DB_NAME}:${DB_PASSWORD}@${DB_CLUSTER}mongodb.net/myFirstDatabase?retryWrites=true&w=majority`,
    JWT_SECRET: `${JWT_SECRET}`
}