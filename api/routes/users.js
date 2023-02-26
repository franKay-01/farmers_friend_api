const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({message:"user INFO"})
})

router.post('/', (req, res, next) => {
    res.status(200).json({message:"user INFO"})
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