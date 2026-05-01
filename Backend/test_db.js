const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/rapidaid')
.then(() => {
    console.log("Connection successful");
    process.exit(0);
})
.catch(err => {
    console.error("Connection failed:", err);
    process.exit(1);
});
