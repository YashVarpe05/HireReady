const mongoose = require("mongoose");

async function connectToDB() {
	if (!process.env.MONGO_URI) {
		console.error(
			"MONGO_URI is not set. Set the MONGO_URI environment variable to your MongoDB connection string.",
		);
		throw new Error("MONGO_URI not provided");
	}

	try {
		await mongoose.connect(process.env.MONGO_URI);

		console.log("Connected to Database");
	} catch (err) {
		console.error(
			"Failed to connect to MongoDB:",
			err && err.message ? err.message : err,
		);
		throw err;
	}
}

module.exports = connectToDB;
