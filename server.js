//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const path = require("path");
const lodash = require("lodash");

const app = express();

const careers = ["Engineering", "Medical", "Law"];

app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, "views")));

app.get("/", function(req, res){
    res.render("index");
});

app.get("/index", function(req, res){
    res.render("index");
});

app.get("/about", function(req, res) {
    res.render("about");
});

app.get("/careers", function(req, res) {
    res.render("careers")       
});

app.get("/engineering", function(req, res) {
    res.render("engineering");
});

app.get("/medical-science", function(req, res) {
    res.render("medical-science");
});

app.get("/law", function(req, res) {
    res.render("law");
});

app.get("/comp-sc", function(req, res) {
    res.render("comp-sc");
});

app.get("/artshumanaties", function(req, res) {
    res.render("artshumanaties");
});

app.get("/entrepreneurship", function(req, res) {
    res.render("entrepreneurship");
});

app.get("/education", function(req, res) {
    res.render("education");
});

app.get("/commerce", function(req, res) {
    res.render("commerce");
});

app.get("/maintenance", function(req, res) {
    res.render("maintenance");
});

app.listen(3000, function(){
    console.log("Hey, this is the server speaking!");
});