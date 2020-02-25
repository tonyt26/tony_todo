const mongoose = require("mongoose")

const dbURI = "mongodb+srv://ttreg1:tttest1@cluster-t-jswcu.azure.mongodb.net/test?retryWrites=true&w=majority"

const options = {
    reconnectTries: Number.MAX_VALUE,
    poolSize: 10
}

mongoose.connect(dbURI, options).then(
    () => {
        console.log("Db successfully connected")
    },
    err => {
        console.log("Unable to connect due to: ", err)
    }
);

require("../models/Task")
