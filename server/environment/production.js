const { resolve } = require("path");

module.exports = {
  db : {
    protocol  : "mongodb+srv",
    user : "adminPlaymaker",
    password : "XcGtXFvECIMzy6Sc",
    host : "cluster0.ff1rx.mongodb.net",
    name : "todoreactmui",
    options : "retryWrites=true&w=majority",
  }
};