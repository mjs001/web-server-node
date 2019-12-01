const env = process.env.NODE_ENV || "dev";

const dev = {
  server: {
    host: process.env.HOST || "0.0.0.0",
    port: process.env.PORT || 3000
  }
};
const production = {
  server: {
    host: process.env.HOST || "0.0.0.0",
    port: process.env.PORT || 3000
  }
};
const config = { dev, production };

module.exports = config[env];
