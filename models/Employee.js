const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// create our User model
class Employee extends Model {}

// define table columns and configuration
Employee.init(
    {
        // define an id column
        id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true
        },
        // define a username column
        employeeName: {
          type: DataTypes.STRING,
          allowNull: false
        },
        LMID: {
            type: DataTypes.STRING,
            allowNull: false
        },
        hireDate: {
            type: DataTypes.DATEONLY,
            allowNull: false
        },
        // define an email column
        email: {
          type: DataTypes.STRING,
          allowNull: false,
          unique: true,
          validate: {
            isEmail: true
          }
        },
      },
        {
          sequelize,
          freezeTableName: true,
          underscored: true,
          modelName: 'employee'
        }
     
);

module.exports = Employee;