'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.createTable('recipients', { 
        id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
        },
        nome: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        rua: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        numero: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        complemento: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        estado: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        cep: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
        cidade:{
          type: Sequelize.STRING,
          allowNull: false,
        },
        created_at: {
          allowNull: false,
          type: Sequelize.DATE,
        },
        updated_at: {
          allowNull: false,
          type: Sequelize.DATE,
        },
      });
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.dropTable('recipients');
  }
};
