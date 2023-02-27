const express = require('express');
const router = express.Router();
const {Users, AnimalInfo} = require('../../models');

router.get('/', async (req, res, next) => {
  try{
    const animals = await AnimalInfo.findAll({
      // where: {userId: 1},
      include: ['users']
    })
    return res.json({
      animals: animals
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
  const {referrenceNo, animalType, dob, cageNumber, characteristics, gender} = req.body;
  try{
    const user = await Users.findOne({where: { referrenceNo }})
    const animalInfo = await AnimalInfo.create({animalType, dob, cageNumber, characteristics, gender, userId: user.id})
    res.status(200).json({
      message:"animal INFO",
      user: animalInfo
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
  const animalId = req.params.id;
  res.status(200).json({
    message: `ANIMAL INFO`,
    id: animalId
  })
})

router.patch('/:id', (req, res, next) => {
  const animalId = req.params.id;
  res.status(200).json({
    message: `Updated animal record`
  })
})

router.delete('/:id', (req, res, next) => {
  const animalId = req.params.id;
  res.status(200).json({
    message: `Updated animal record`
  })
})

module.exports = router;