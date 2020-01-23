const  Router  =  require("express");
const routes = new Router();

routes.get("/", (req, res) =>{
  return res.sendFile(__dirname + '/pages/index.html')
});

module.exports = routes;
    