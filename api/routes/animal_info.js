const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({message:"ANIMAL INFO"})
})

router.post('/', (req, res, next) => {
    const animalInfo = {
        name: req.body.name
    }
    res.status(200).json({message:"ANIMAL INFO"})
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