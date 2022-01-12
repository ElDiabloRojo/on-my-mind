const mongoose = require('mongoose');
const connection = "mongodb+srv://root:P@ssw0rd@omm0.aa0dg.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
mongoose.connect(connection,{ useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false})
    .then(() => console.log("Database Connected Successfully"))
    .catch(err => console.log(err));