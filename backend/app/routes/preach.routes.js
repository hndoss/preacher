module.exports = app => {
    const preaches = require("../controllers/preach.controller.js");
  
    var router = require("express").Router();
  
    router.post("/", preaches.create);
    router.get("/", preaches.getAll);
    router.get("/published", preaches.findAllPublished);
    router.get("/:id", preaches.findOne);
    router.put("/:id", preaches.update);
    router.delete("/:id", preaches.delete);
    router.delete("/", preaches.deleteAll);
  
    app.use('/api/preaches', router);
  };