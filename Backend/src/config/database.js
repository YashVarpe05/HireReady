const mongoose = require("mongoose")
const express = require("express")
const app = express()

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server is running on port ${port}`));

async function connectToDB() {

    try {
        await mongoose.connect(process.env.MONGO_URI)

        console.log("Connected to Database")
    }
    catch (err) {
        console.log(err)
    }
}

module.exports = connectToDB