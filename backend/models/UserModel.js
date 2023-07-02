// import { Sequelize } from "sequelize";
// import db from "../config/Database.js";
const Sequelize = require('sequelize');
const db = require('../config/Database')

const { DataTypes } = Sequelize;

const User = db.define('user', {
    name:{
        type: DataTypes.STRING,
    },
    email:{
        type: DataTypes.STRING,
    },
    password:{
        type: DataTypes.STRING,
    },
    refresh_token:{
        type: DataTypes.TEXT,
    }
},{
    freezeTableName: true,
})

module.exports = User;