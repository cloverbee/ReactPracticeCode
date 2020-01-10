const express = require("express");
const async = require("async");
var bodyParser = require("body-parser");

//const path = require("path");
const app = new express();

const router = express.Router(); 

var cors = require('cors')
app.use(cors()) // Use this after the variable declaration

// Server Middleware
app.use(bodyParser.json());
app.use((req, res, next) => {
  console.log("A " + req.method + " request received at " + new Date());
  next();
});
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  next();
});
app.listen(8080, () => {
    console.log("Listening to port 8080.");
});

app.use('/api', router);
app.get('/', (req, res) => {
    //res.json("somthing");
    console.log("req.query", req.query);
    let dict = {};
    let str = req.query.targetstring;
    /*for(let i = 0; i < str.length; i++){
        for(let j = i + 1; j < str.length+1; j++){
            console.log(str.slice(i, j));
            if(str.slice(i, j) in dict){
                dict[str.slice(i, j)] += 1;
            }
            else{
                dict[str.slice(i, j)] = 1;
            }
        }
    }*/
    for(let i = 1; i < (str.length)/2 + 2; i++){
        let tmp = str.slice(0, i);
        console.log("*****88");
        for(let j = str.indexOf(tmp); j != -1; j = str.indexOf(tmp, j+1)){
            console.log("indexoftmp", j, tmp);
            if(tmp in dict){
                dict[tmp] += 1;
            }
            else{
                dict[tmp] = 1;
            }
        }
    }
    console.log('dict', dict);
    let arr = [];
    Object.entries(dict).forEach(([key, value]) => {
        if(value > 1){
            arr.push(`${key}:${value}`)
        }
    })
    res.json(arr);
})