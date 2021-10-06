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

// About

app.get("/about",(req,res)=>{
    res.render("about");
})
app.get("/aboutMission",(req,res)=>{
    res.render("aboutMission");
})
app.get("/pri",(req,res)=>{
    res.render("pri");
})

// Admission

app.get("/admssPro",(req,res)=>{
    res.render("admssPro");
})
app.get("/feeChart",(req,res)=>{
    res.render("feeChart");
})
app.get("/rulesRegu",(req,res)=>{
    res.render("rulesRegu");
})
app.get("/skulTime",(req,res)=>{
    res.render("skulTime");
})
app.get("/skulUniform",(req,res)=>{
    res.render("skulUniform");
})

// Academics

app.get("/priPrimary",(req,res)=>{
    res.render("priPrimary");
})
app.get("/primary",(req,res)=>{
    res.render("primary");
})
app.get("/middleSkul",(req,res)=>{
    res.render("middleSkul");
})
app.get("/secondary",(req,res)=>{
    res.render("secondary");
})
app.get("/srSecondary",(req,res)=>{
    res.render("srSecondary");
})


app.get("/",(req,res)=>{
    res.send("Hello from the abhaytechnical")
});
 app.listen(port,()=>{
     console.log(`Server is running at the port number ${port}` );
 })