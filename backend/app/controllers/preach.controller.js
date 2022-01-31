const db = require("../models");
const Preach = db.preaches;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
  // Validate request
  if (!req.body.title) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  const preach = {
    title: req.body.title
  };

  Preach.create(preach)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the preach."
      });
    });
};

exports.getAll = (req, res) => {
  const title = req.query.title;

  Preach.findAll()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving preaches."
      });
    }); 
};

exports.findOne = (req, res) => {
  const id = req.params.id;

  Preach.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find preach with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving preach with id=" + id
      });
    });
};

exports.update = (req, res) => {
  const id = req.params.id;

  Preach.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "preach was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update preach with id=${id}. Maybe preach was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating preach with id=" + id
      });
    });
  
};

exports.delete = (req, res) => {
  const id = req.params.id;

  Preach.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "preach was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete preach with id=${id}. Maybe preach was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete preach with id=" + id
      });
    });
  
};

exports.deleteAll = (req, res) => {
  Preach.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} preaches were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all preaches."
      });
    });
  
};

exports.findAllPublished = (req, res) => {
  
  Preach.findAll({ where: { published: true } })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving preaches."
      });
    });
  
};