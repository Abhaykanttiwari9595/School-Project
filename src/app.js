const express = require("express");
const app = express();
const hbs = require("hbs");
const port =  process.env.PORT || 3000;
require("./db/conn"); //connected database conn.js


// econnected file  to express js
const path = require("path");
const static_path = path.join(__dirname,"../public");
const template_path = path.join(__dirname,"../templates/views");
const partials_path = path.join(__dirname,"../templates/partials");
hbs.registerPartials(partials_path);

app.use(express.static(static_path));
app.set("views",template_path);
app.set("view engine","hbs");
app.get("/",(req,res)=>{
    res.render("index");
})
app.get("/about",(req,res)=>{
    res.render("about");
})
app.get("/aboutMission",(req,res)=>{
    res.render("aboutMission");
})
app.get("/",(req,res)=>{
    res.send("Hello from the abhaytechnical")
});
 app.listen(port,()=>{
     console.log(`Server is running at the port number ${port}` );
 })