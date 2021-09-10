const { resolve } = require("path");

module.exports = {
  ports: {
    http: 80,
    https: 4433,
  },
  ssl: {
    cert: resolve("ssl", "ikd.crt"),
    key: resolve("ssl", "ikd.key"),
  },
  db : {
    protocol  : "mongodb+srv",
    user : "adminPlaymaker",
    password : "XcGtXFvECIMzy6Sc",
    host : "cluster0.ff1rx.mongodb.net",
    name : "todoreactmui",
    options : "retryWrites=true&w=majority",
  }
};