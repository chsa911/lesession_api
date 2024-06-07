const express = require("express");
const mongoose = require("mongoose");
const Product = require("./models/product.model.js");
const productRoute = require("./routes/product.route.js");
const app = express();
const bodyParser =require("body-parser");
// middleware
app.use(bodyParser.json())
app.use(express.static('public'))
app.use(bodyParser.urlencoded({
    extended:true
}))
// routes
app.use("/api/products", productRoute);






app.get("/", (req, res) => {
  res.send("Hello from Node API Server Updated");
});

var db=mongoose.connection
mongoose
  .connect(
   "mongodb://localhost:27017/Database"
   //"mongodb+srv://chsa911:Pointbreak_1@atlascluster.m7nuxbs.mongodb.net/lesession?retryWrites=true&w=majority&appName=AtlasCluster"
)
  .then(() => {
    console.log("Connected to database!");
    app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
  })
  .catch(() => {
    console.log("Connection failed!");
  });

//form fields
app.post("/products",(req,res) => {

    var eindat= req.body.eindat
    var entdat=req.body.entdat
    var verdat=req.body.verdat
    var enddat=req.body.enddat
    var leseversuche=req.body.leseversuche

    var autor=req.body.autor
    var keyword=req.body.keyword
    var kwp=req.body.kwp
    var verlag=req.body.verlag
    var seiten=req.body.seiten

    var genre=req.body.genre
    var gengenau=req.body.gengenau
    var kontinent=req.body.kontinent
    var land=req.body.land
    var thema0=req.body.thema0
    var thema1=req.body.thema1
    var hauptperson0=req.body.hauptperson0
    var hauptperson1=req.body.hauptperson1
    var thema2=req.body.thema2

    var zeit=req.body.zeit
    var amalin=req.body.amalin

    var position=req.body.position
    var mark=req.body.mark
    var markrang=req.body.markrang
    var topw=req.body.topw
    var belber=req.body.belber
    var gesw=req.body.gesw
    var zustand=req.body.zustand

    var data={
        "eindat":eindat,
        "entdat":entdat,
        "verdat":verdat,
        "enddat":enddat,
        "leseversuche":leseversuche,

        "autor":autor,
        "keyword":keyword,
        "kwp":kwp,
        "verlag":verlag,
        "seiten":seiten,

        "genre":genre,
        "gengenau":gengenau,
        "kontinent":kontinent,
        "land":land,
        "thema0":thema0,
        "thema1":thema1,
        "thema2":thema2,
        "hauptperson0":hauptperson0,
        "hauptperson1":hauptperson1,
        "zeit":zeit,
        "amalin":amalin,

        "position":position,
        "mark":mark,
        "markrang":markrang,
        "topw":topw,
        "belber":belber,
        "gesw":gesw,
        "zustand":zustand
}
db.createCollection('products');
db.collection('products').insertOne(data,(err,collection) => {
        if(err){
            throw err;
        }
        console.log("Record Inserted Succesfully")
    })
}

)