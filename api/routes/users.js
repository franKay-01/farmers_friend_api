const express = require('express');
const router = express.Router();
const {Users} = require('../../models');
const { 
    v1: uuidv1,
    v4: uuidv4,
  } = require('uuid');

router.get('/', (req, res, next) => {
    res.status(200).json({message:"user INFO"})
})

router.post('/', async(req, res, next) => {
    const {firstname, lastname, email, phonenumber, password} = req.body;
    try{
        console.log(uuidv4());
        const randomNumber = Math.floor(Math.random() * 10000);
        const username = firstname.concat(randomNumber);
        const referrence_no = uuidv4();
        const roles = 'admin';

        const user = await Users.create({firstname, lastname, email, phonenumber, password, username, referrence_no, roles})
        res.status(200).json({
            message:"user INFO",
            user: user
        })
    }catch(err){
        res.status(err.status || 500)
        res.json({
            error: {
                message: err.message
            }
        })
    }
})

router.get('/:id', (req, res, next) => {
    res.status(200).json({
        message: `user INFO`,
        id: req.params.id
    })
})

router.patch('/:id', (req, res, next) => {
    res.status(200).json({
        message: `Updated user record`
    })
})

router.delete('/:id', (req, res, next) => {
    res.status(200).json({
        message: `Updated user record`
    })
})

module.exports = router;