/* Express Dependency */
// the path is relative to the node_modules folder by default //
const express = require('express');
const ejs = require('ejs');
const app = express();

// ROUTES (a url fragment) => a Javascript function
app.set("view engine", "ejs");

app.get("/", function(req, res) {
    //req: request (what the client is sending over)
    //res: response (what you are going to send back to the client)
    //res.send("<h1>Hello World</h1><h2>Hi, how are you?</h2>");

    const now = new Date(); 
    const day = now.getDay();

    res.render("index", {
        "yourName" : "Mickey Mouse",
        "now" : now
    }); //send back the content of index.ejs
                         //res.render() will assume the file to be in views folder
});

app.get("/about-us", function(req, res){
    //res.send("About Us - Today is 25 September 2023. What day is your?")
    res.render("aboutus");
})

//match hello/<anything>
//will match hello/paul or hello/daniel
app.get('/hello/:firstName', function(req, res) {
    res.send ("Hello " + req.params.firstName);
})

app.listen(8080, function() {
    console.log("Epress server has started");
})