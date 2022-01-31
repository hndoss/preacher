module.exports = (sequelize, Sequelize) => {
    const Preach = sequelize.define("preach", {
      title: {
        type: Sequelize.STRING
      }   
    });
  
    return Preach;
  };