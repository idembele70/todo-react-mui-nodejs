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
};
