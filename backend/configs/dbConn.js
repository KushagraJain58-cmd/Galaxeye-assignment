const mongoose = require('mongoose');
const mongoURI = `mongodb://mongodb:27017/galaxyeye`
// const mongoURI = `mongodb://localhost:27017/galaxyeye`

const connectDB = async () => {
	try {
		await mongoose.connect(mongoURI, {
			useNewUrlParser: true,
			useUnifiedTopology: true
		});
	} catch (err) {
		console.error(err);
		process.exit(1);
	}
};

module.exports = connectDB;
