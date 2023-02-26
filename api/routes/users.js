const express = require('express');
const router = express.Router();
const {Users} = require('../../models');

router.get('/', async (req, res, next) => {
  try{
    const users = await Users.findAll()
    return res.json({
      users: users
    })
  }catch(err){
    console.log(err)
    res.status(err.status || 500)
    res.json({
      error: {
        message: err.message
      }
    })
  }
})

router.post('/', async (req, res, next) => {
  const {firstname, lastname, email, phonenumber, password} = req.body;
  try{
    const randomNumber = Math.floor(Math.random() * 10000);
    const username = firstname.concat(randomNumber);
    const roles = 'admin';

    const user = await Users.create({firstname, lastname, email, phonenumber, password, username, roles})
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

router.get('/:referrence_no', async (req, res, next) => {
  const referrence_no = req.params.referrence_no;
  try{
    const user = await Users.findOne({
      where: { referrence_no }
    })
    
    return res.json({
      users: user
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