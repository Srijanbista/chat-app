const express = require('express');
const UserModel = require('../models/UserModel');

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const user = await UserModel.find();
        res.status(200).send(user);
    } catch (error) {
        console.log('Error fetching users', error);
        throw error;
    }
})

router.get('/:id', async (req, res) => {
    try {
        const userId = req.params.id;

        const user = await UserModel.find({ _id: userId });
        res.status(200).send(user);
    }
    catch (error) {
        console.log('Error fetching user by id', error);
        throw error;
    }
})

router.post('/create', async (req, res) => {
    try {
        const { name, email } = req.body;
        if (!name || !email) {
            return res.status(400).send('Name and Email are required');
        }
        else {
            const user = await UserModel.create({ name, email });
            return res.status(201).send(user);
        }
    } catch (error) {
        console.log('Error creating user', error);
        throw error;
    }
})

module.exports = router;