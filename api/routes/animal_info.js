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
  const {referenceNo, animalType, dob, cageNumber, characteristics, gender} = req.body;
  try{
    const user = await Users.findOne({where: { referenceNo }})
    const animalInfo = await AnimalInfo.create({animalType, dob, cageNumber, characteristics, gender, userId: user.id})
    res.status(200).json({
      message:"animal INFO",
      animal: animalInfo
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

router.get('/:referenceNo', async (req, res, next) => {
  const referenceNo = req.params.referenceNo;
  try{
    const animal = await AnimalInfo.findOne({
      where: { referenceNo },
      include: ['users']
    })

    return res.json({
      animal: animal
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