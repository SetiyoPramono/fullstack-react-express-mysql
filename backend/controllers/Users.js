// import Users from "../models/UserModel.js";
// import bcrypt from "bcryptjs";
// import jwt from "jsonwebtoken";
const Users = require('../models/UserModel')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

module.exports = {
    getUsers : async (req, res) => {
        try {
            const users = await Users.findAll({
                attributes: ['id', 'name', 'email']
            });
            res.json(users);
        } catch (error) {
            console.log(error);
        }
    },
    Register : async (req, res) => {
        const { name, email, password, confPassword } = req.body;
        if (password !== confPassword) return res.status(400).json({ msg: "password dan Confirm Password tidak cocok" });
        const salt = await bcrypt.genSalt();
        const hashPassword = await bcrypt.hash(password, salt);
        try {
            await Users.create({
                name: name,
                email: email,
                password: hashPassword
            });
            res.json({ msg: "User berhasil ditambahkan" });
        }catch (error) {
            console.log(error);
        }
    },
    Login : async (req, res) => {
        try {
            const user = await Users.findAll({
                where: {
                    email: req.body.email
                }
            });
            const match = await bcrypt.compare(req.body.password, user[0].password);
            if (!match) return res.status(400).json({ msg: "Password Salah" });
            const userId = user[0].id;
            const name = user[0].name;
            const email = user[0].email;
            const accessToken = jwt.sign({ userId, name, email}, process.env.ACCESS_TOKEN_SECRET, { expiresIn: "15s" });
            const refreshToken = jwt.sign({ userId, name, email}, process.env.REFRESH_TOKEN_SECRET, { expiresIn: "1d" });
            await Users.update({refresh_token:refreshToken},{
                where: {
                    id: userId
                }
            });
            res.cookie("refreshToken", refreshToken, { 
                httpOnly: true, 
                maxAge: 24 * 60 * 60 * 1000 
            });
            res.json({ accessToken });
        }catch (error) {
            res.status(400).json({ msg: "Email tidak ditemukan" });
        }
    },
    Logout : async (req, res) => {
        const refreshToken = req.cookies.refreshToken;
        if (!refreshToken) return res.cookie.refreshToken;
        const user = await Users.findAll({
            where: {
                refresh_token: refreshToken
            }
        });
        if (!user[0]) return res.sendStatus(201);
        const userId = user[0].id;
        await Users.update({refresh_token:null},{
            where: {
                id: userId
            }
        });
        res.clearCookie("refreshToken");
        return res.sendStatus(200);
    }
}
