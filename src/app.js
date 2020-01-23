const express =  require("express");
const routes = require("./routes");


class App {
  constructor() {
    this.server = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use('/', express.static(__dirname + '/pages/'));
  }

  routes() {
    this.server.use(routes);
    this.server.get('/', (req, res)=>{
      res.send('Hello word')
    })
  }
}

module.exports = new App().server

