const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/youtubeRegistration2",{
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(()=>{
    console.log("connection sucessful");
}).catch((err)=>{
    console.log("no connection")
})