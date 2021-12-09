


const mongoose = require("mongoose");

const connect = async () => {
  const dbUri = "mongodb+srv://fatimzahra:anahna1993@cluster0.hyplh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
  try {
    await mongoose.connect(dbUri);

    console.log("Connected to database ");
  } catch (error) {
    console.log(`Error connecting to the database`);
  }
};

export default connect;